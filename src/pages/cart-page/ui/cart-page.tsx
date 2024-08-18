import { useEffect } from "react";
import { PageTitle } from "../../../shared/ui";
import { CartProductItem } from "../../../widgets/cart";
import styles from "./cart-page.module.css";
//import { useGetCartByUserIdQuery } from "../../../store/slices/api-slice";
import { ProductType } from "../../../store/types/product-type";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCart,
  selectCartItems,
  selectCartStatus,
} from "../../../store/slices/cart-slice";
import { AppDispatch } from "../../../store/store";

export const CartPage = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const products = useSelector(selectCartItems);
  console.log('products', products)
  const cartStatus = useSelector(selectCartStatus);
  const userId = "6";
  //const { data, isLoading } = useGetCartByUserIdQuery(userId);
  //console.log(data);
  useEffect(() => {
    if (cartStatus === "idle") {
      dispatch(fetchCart(userId));
    }
  }, [cartStatus, dispatch]);
  return (
    <>
      <PageTitle title="My cart | Goods4you" />
      <section className={styles.cart}>
        <h2 className={styles.cartTitle}>My cart</h2>
        {cartStatus === "loading" ? (
          <p>Loading...</p>
        )
        : products.length === 0 ? (
          <p className={styles.message}>No items</p>
        )
        : (
          <div className={styles.cartContainer}>
            <div className={styles.cartForm}>
              {products.map((item: ProductType) => (
                <CartProductItem
                  link={item.thumbnail}
                  key={item.id}
                  id={item.id as number}
                  name={item.title}
                  price={(
                    item.price -
                    (item.price * item.discountPercentage) / 100
                  ).toFixed(2)}
                  quantity={item.quantity}
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
