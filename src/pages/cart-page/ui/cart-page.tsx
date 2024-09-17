import { useEffect } from "react";
import { PageTitle } from "../../../shared/ui";
import { CartProductItem } from "../../../widgets/cart";
import styles from "./cart-page.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCart,
  selectCartItems,
  selectCartStatus,
  selectCartError,
} from "../../../store/slices/cart-slice";
import { AppDispatch } from "../../../store/store";
import { RootState } from "../../../store/store";

export const CartPage = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const products = useSelector(selectCartItems);
  //console.log('products', products)
  const cartStatus = useSelector(selectCartStatus);
  const cartError = useSelector(selectCartError);
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user?.id;
  //const { data, isLoading } = useGetCartByUserIdQuery(userId);
  //console.log(data);
  useEffect(() => {
    if (userId && cartStatus === "idle") {
      dispatch(fetchCart());
    }
  }, [userId, cartStatus, dispatch]);
  return (
    <>
      <PageTitle title="My cart | Goods4you" />
      <section className={styles.cart}>
        <h2 className={styles.cartTitle}>My cart</h2>
        {cartStatus === "loading" ? (
          <p>Loading...</p>
        ) : cartStatus === "failed" ? (
          <p className={styles.status}>Failed to load cart: {cartError}</p>
        ) : products.length === 0 ? (
          <p className={styles.message}>No items</p>
        ) : (
          <div className={styles.cartContainer}>
            <div className={styles.cartForm}>
              {products?.map((item) => (
                <CartProductItem
                  product={item}
                  key={item.id}
                />
              ))}
            </div>
            <div className={styles.cartTotal}>
              <div className={styles.priceCalculation}>
                <div className={styles.calculationItem}>
                  <span className={styles.priceTotal}>Total count</span>
                  <span className={styles.total}>
                    {products.reduce(
                      (acc, product) => acc + product.quantity,
                      0
                    )}
                    items
                  </span>
                </div>
                <div className={styles.calculationItem}>
                  <span className={styles.priceDiscount}>
                    Price without discount
                  </span>
                  <span className={styles.discount}>
                    {products
                      .reduce(
                        (acc, product) =>
                          acc + product.price * product.quantity,
                        0
                      )
                      .toFixed(2)}
                    $
                  </span>
                </div>
              </div>
              <div className={styles.calculationItem}>
                <span className={styles.priceFinal}>Total price</span>
                <span className={styles.final}>
                  {products
                    .reduce(
                      (acc, product) =>
                        acc +
                        product.price *
                          product.quantity *
                          (1 - product.discountPercentage / 100),
                      0
                    )
                    .toFixed(2)}
                  $
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
