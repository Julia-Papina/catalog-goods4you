import { Link } from "react-router-dom";
import basket from "../../../assets/icons/basket.svg";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={"/"} className={styles.header__link}>
          Goods4you
        </Link>
        <nav className={styles.header__nav}>
          <Link className={styles.header__navLink} to={""}>
            Catalog
          </Link>
          <Link className={styles.header__navLink} to={""}>
            FAQ
          </Link>
          <div className={styles.header__navCart}>
            <Link className={styles.header__navLink} to={"/cart"}>
              Cart
            </Link>
            <div className={styles.header__cartBasket}>
              <img className={styles.header__imageBasket} src={basket} alt="иконка корзины" />
              <div className={styles.header__navCounter}>1</div> 
            </div>
          </div>

          <Link className={styles.header__navLink} to={""}>
            Johnson Smith
          </Link>
        </nav>
      </div>
    </header>
  );
};
