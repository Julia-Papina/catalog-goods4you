import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { MainButton } from "../main-button/main-button";
import { BasketIcon } from "../../assets";
import { Counter } from "../counter/counter";
import styles from "./product-card.module.css";
import { ProductType } from "../../../store/types/product-type";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import {
  checkProductInCart,
  selectProductQuantityInCart,
} from "../../../store/slices/cart-slice";

export type ProductCardProps = {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
  onRemoveFromCart: (product: ProductType) => void;
};
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onRemoveFromCart,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartQuantity = useSelector((state: RootState) =>
    selectProductQuantityInCart(state, product?.id)
  );
  const { id, title, price, discountPercentage, thumbnail, stock } = product;
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );
  const [isCounter, setIsCounter] = useState(cartQuantity ? true : false);

  const handleClickBasket = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setIsCounter(!isCounter);
    dispatch(checkProductInCart({ productId: product?.id }));
  };

  const updateCartQuantity = () => {
    if (cartQuantity < stock ) {
      dispatch(checkProductInCart({ productId: product?.id }));
    } else {
      onRemoveFromCart(product);
    }
  };

  return (
    <article className={styles.productCard}>
      <Link to={`/product/${id}`} className={styles.link}>
        <img
          className={styles.image}
          src={thumbnail}
          alt="Изображение товара"
        ></img>
        <div className={styles.overlay}>Show details</div>

        <div className={styles.description}>
          <ul
            className={clsx(styles.text, {
              [styles.textCounter]: isCounter,
            })}
          >
            <li
              className={clsx(styles.textTitle, {
                [styles.textTitle__counter]: isCounter,
              })}
            >
              {title}
            </li>
            <li className={styles.textPrice}>{discountedPrice}$</li>
          </ul>

          {isCounter && cartQuantity > 0 ? (
            <Counter
              quantity={cartQuantity}
              updateCartQuantity={updateCartQuantity}
            />
          ) : (
            <div className={styles.buttonMain}>
              <MainButton
                variant="secondary"
                onClick={handleClickBasket}
                aria-label="Добавить товар в корзину"
              >
                <img
                  src={BasketIcon}
                  alt="Иконка корзины товаров"
                  className={styles.basketIcon}
                ></img>
              </MainButton>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};
