import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../../services/api-user-slice";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQuantity } from "../../../store/slices/cart-slice";
import { logout, setUser } from "../../../store/slices/auth-slice";
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
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const cartQuantity = useSelector(selectTotalQuantity);

  const {
    data: user,
    isLoading,
    error,
  } = useGetUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      fetchCart(user.id);
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(logout());
      navigate("/");
    }
  }, [error, navigate, dispatch]);

  const fetchCart = (userId: number) => {
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
        } else {
          setTotalQuantity(0);
        }
      })
      .catch((err) => console.error("Error fetching cart data:", err));
  };

  useEffect(() => {
    setTotalQuantity(cartQuantity);
  }, [cartQuantity]);

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
              {user && totalQuantity !== null && totalQuantity > 0 && (
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
            {isLoading ? (
              <span>Loading...</span>
            ) : user ? (
              <span className={styles.header__navLink}>
                {user.firstName} {user.lastName}
              </span>
            ) : (
              <NavLink className={styles.header__navLink} to={"/login"}>
                Sign In
              </NavLink>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};
