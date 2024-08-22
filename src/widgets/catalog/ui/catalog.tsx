import { useState, useEffect } from "react";
import { InputSearch, MainButton } from "../../../shared/ui";
import { ProductCard } from "../../../shared/ui";
import styles from "./catalog.module.css";
import { useSearchProductsQuery } from "../../../services/api-slice";
import { ProductType } from "../../../store/types/product-type";
import { debounce } from "lodash";

export const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [limit] = useState<number>(12);
  const [skip, setSkip] = useState<number>(0);
  const [allProducts, setAllProducts] = useState([] as ProductType[]);
  const { data } = useSearchProductsQuery({ q: searchQuery, limit, skip });
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

  return (
    <section id="catalog" className={styles.catalog}>
      <h2 className={styles.title}>Catalog </h2>

      <div className={styles.input}>
        <InputSearch
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.cardsList}>
        {allProducts.map((item: ProductType) => (
          <ProductCard
            key={item.id}
            link={item.thumbnail}
            id={item.id as number}
            name={item.title}
            price={item.price}
            quantity={item.quantity}
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
