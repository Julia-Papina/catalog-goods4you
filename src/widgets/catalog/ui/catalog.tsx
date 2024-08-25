import { useState, useEffect } from "react";
import { InputSearch, MainButton } from "../../../shared/ui";
import { ProductCard } from "../../../shared/ui";
import styles from "./catalog.module.css";
import { useSearchProductsQuery } from "../../../services/api-slice";
import { ProductType } from "../../../store/types/product-type";
import { debounce } from "lodash";
import { updateCart } from "../../../store/slices/cart-slice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [limit] = useState<number>(12);
  const [skip, setSkip] = useState<number>(0);
  const [allProducts, setAllProducts] = useState([] as ProductType[]);
  const { data } = useSearchProductsQuery({ q: searchQuery, limit, skip });
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  //console.log("data", data);
  useEffect(() => {
    if (data?.products) {
      setAllProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);
  const showMoreButton = data && allProducts.length < data.total;
  const loadMoreProducts = () => {
    setSkip((prev) => prev + limit);
  };
  const handleSearchChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
      setSkip(0);
      setAllProducts([]);
    },
    600
  );

  const handleAddToCart = (product: ProductType) => {
    if (userId) {
      const existingProduct = cartItems.find((item) => item.id === product.id);
      const updatedItems = existingProduct
        ? cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: + 1 } : item
          )
        : [...cartItems, { ...product, quantity: 1 }];

      dispatch(updateCart({ userId, products: updatedItems }));
    }
  };

  const handleRemoveFromCart = (product: ProductType) => {
    if (userId) {
      const updatedItems = cartItems
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity >= 0);

      dispatch(updateCart({ userId, products: updatedItems }));
    }
  };

  return (
    <section id="catalog" className={styles.catalog}>
      <h2 className={styles.title}>Catalog </h2>

      <div className={styles.input}>
        <InputSearch onChange={handleSearchChange} />
      </div>
      <div className={styles.cardsList}>
        {allProducts.map((item: ProductType) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={() => handleAddToCart(item)}
            onRemoveFromCart={() => handleRemoveFromCart(item)}
          />
        ))}
      </div>
      <div className={styles.catalogButton}>
        {showMoreButton && (
          <MainButton
            variant="main"
            aria-label="Показать больше товаров"
            onClick={loadMoreProducts}
          >
            Show more
          </MainButton>
        )}
      </div>
    </section>
  );
};
