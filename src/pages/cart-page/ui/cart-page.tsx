import { PageTitle } from "../../../shared/ui";
import { CartProductItem } from "../../../widgets/cart";
import styles from "./cart-page.module.css";
import { useGetCartByUserIdQuery } from "../../../store/slices/api-slice";
import { ProductType } from "../../../store/types/product-type";

export const CartPage = () => {
  const userId = 6;
  const { data, isLoading } = useGetCartByUserIdQuery(userId);
  //console.log(data);
  return (
    <>
      <PageTitle title="My cart | Goods4you" />
      <section className={styles.cart}>
        <h2 className={styles.cartTitle}>My cart</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.cartContainer}>
            <div className={styles.cartForm}>
              {data?.carts[0].products.map((item: ProductType) => (
                <CartProductItem
                  link={item.thumbnail}
                  key={item.id}
                  id={item.id as number}
                  name={item.title}
                  price={(item.price - (item.price * item.discountPercentage)/ 100).toFixed(2)}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <div className={styles.cartTotal}>
              <div className={styles.priceCalculation}>
                <div className={styles.calculationItem}>
                  <span className={styles.priceTotal}>Total count</span>
                  <span
                    className={styles.total}
                  >{`${data?.carts[0].totalProducts} items`}</span>
                </div>
                <div className={styles.calculationItem}>
                  <span className={styles.priceDiscount}>
                    Price without discount
                  </span>
                  <span
                    className={styles.discount}
                  >{`$${data?.carts[0].total}`}</span>
                </div>
              </div>
              <div className={styles.calculationItem}>
                <span className={styles.priceFinal}>Total price</span>
                <span
                  className={styles.final}
                >{`$${data?.carts[0].discountedTotal}`}</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
