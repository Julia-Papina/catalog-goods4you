import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { NavLink } from "react-router-dom";
import basket from "../../../shared/assets/icons/basket.svg";
import styles from "./header.module.css";

export const Header = () => {
  const scrollToAnchor = (anchor: string) => {
    setTimeout(() => {
      scroller.scrollTo(anchor, {
        offset: -20,
      });
    }, 1);
  };
  const [totalQuantity, setTotalQuantity] = useState<number | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const userId = 6;
    fetch(`https://dummyjson.com/carts/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (
          data.carts &&
          data.carts.length > 0 &&
          data.carts[0].totalQuantity > 0
        ) {
          setTotalQuantity(data.carts[0].totalQuantity);
        }
      })
      .catch((err) => console.error("Error fetching cart data:", err));
  }, [setTotalQuantity]);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={"/"} className={styles.header__link}>
          Goods4you
        </Link>
        {pathname !== "/login" && (
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
              {totalQuantity !== null && totalQuantity > 0 && (
                <div className={styles.header__cartBasket}>
                  <img
                    className={styles.header__imageBasket}
                    src={basket}
                    alt="иконка корзины"
                  />
                  <div className={styles.header__navCounter}>
                    {totalQuantity}
                  </div>
                </div>
              )}
            </div>

            <NavLink className={styles.header__navLink} to={""}>
              Johnson Smith
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};
