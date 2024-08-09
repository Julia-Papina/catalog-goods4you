import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { NavLink } from "react-router-dom";
import basket from "../../../assets/icons/basket.svg";

import styles from "./header.module.css";

export const Header = () => {
  const scrollToAnchor = (anchor: string) => {
    setTimeout(() => {
      scroller.scrollTo(anchor, {
        // smooth: true,
        offset: -20,
      });
    }, 1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={"/"} className={styles.header__link}>
          Goods4you
        </Link>
        <nav className={styles.header__nav}>
          <NavLink
            className={styles.header__navLink}
            to={"/"}
            onClick={() => scrollToAnchor("catalog")}
          >
            Catalog
          </NavLink>
          <NavLink
            className={styles.header__navLink}
            to={"/"}
            onClick={() => scrollToAnchor("faq")}
          >
            FAQ
          </NavLink>
          <div className={styles.header__navCart}>
            <NavLink className={styles.header__navLink} to={"/cart"}>
              Cart
            </NavLink>
            <div className={styles.header__cartBasket}>
              <img
                className={styles.header__imageBasket}
                src={basket}
                alt="иконка корзины"
              />
              <div className={styles.header__navCounter}>1</div>
            </div>
          </div>

          <NavLink className={styles.header__navLink} to={""}>
            Johnson Smith
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
