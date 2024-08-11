import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { MainButton } from "../main-button/main-button";
import { BasketIcon } from "../../assets";
import { Counter } from "../counter/counter";
import styles from "./product-card.module.css";

export const ProductCard = ({
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
    if (id === 6) {
      return true;
    } else {
      return false;
    }
  };
  const [isCounter, setIsCounter] = useState(counterId);
  const handleClickBasket = () => {
    setIsCounter(!isCounter);
  };
  return (
    <article className={styles.productCard}>
      <Link to={`/product/${id}`} className={styles.link}>
        <img className={styles.image} src={link} alt="Изображение товара"></img>
        <div className={styles.overlay}>Show details</div>
      </Link>
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
            {name}
          </li>
          <li className={styles.textPrice}>{price}</li>
        </ul>

        {isCounter ? (
          <Counter />
        ) : (
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
        )}
      </div>
    </article>
  );
};
