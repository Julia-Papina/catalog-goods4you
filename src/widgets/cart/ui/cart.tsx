import { useState } from "react";
import { Link } from "react-router-dom";
import { MainButton } from "../../../shared/ui/main-button/main-button";
import { Counter } from "../../../shared/ui/counter/counter";
import { BasketIcon } from "../../../shared/assets";
import styles from "./cart.module.css";

export const CartProductItem = ({
  link,
  id,
  name,
  price,
}: {
  link: string;
  id: number;
  name: string;
  price: string;
}) => {
  const counterId = () => {
    if (id === 4) {
      return true;
    } else {
      return false;
    }
  };
  const [isDelete, setIsDelete] = useState(counterId);
  const handleDeleteClick = () => {
    setIsDelete(!isDelete);
  };
  return (
    <article className={styles.cart}>
      <div className={styles.cartInfo}>
        <img
          src={link}
          alt="изображение товара в корзине"
          className={styles.iconProduct}
        />
        <div className={styles.description}>
          <Link to={`/product/${id}`} className={styles.link}>
            <p className={styles.descriptionTitle}>{name}</p>
            <p className={styles.descriptionPrice}>{price}</p>
          </Link>
        </div>
      </div>
      {isDelete ? (
        <div className={styles.cartDelete}>
          <MainButton variant="secondary" aria-label="Добавить товар в корзину">
            <img
              src={BasketIcon}
              alt="Иконка корзины товаров"
              className={styles.basketIcon}
            ></img>
          </MainButton>
        </div>
      ) : (
        <div className={styles.cartCount}>
          <Counter />
          <div className={styles.cartDelete}>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={handleDeleteClick}
              aria-label="Удалить товар из корзины"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </article>
  );
};
