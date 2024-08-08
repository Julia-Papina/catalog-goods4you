import { Link } from "react-router-dom";
import { MainButton } from "../main-button/main-button";
import { BasketIcon } from "../../../assets";

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
  return (
    <article className={styles.productCard}>
      <Link to={`/product/${id}`} className={styles.productCard__link}>
        <img
          className={styles.productCard__image}
          src={link}
          alt="Изображение товара"
        ></img>
        <div className={styles.cover__overlay}>Show details</div>
      </Link>
      <div className={styles.productCard__description}>
        <ul className={styles.productCard__text}>
          <li className={styles.productCard__textTitle}>{name}</li>
          <li className={styles.productCard__textPrice}>{price}</li>
        </ul>
        <MainButton variant="secondary">
          <img
            src={BasketIcon}
            alt="Иконка корзины товаров"
            className={styles.basketIcon}
          ></img>
        </MainButton>
      </div>
    </article>
  );
};
