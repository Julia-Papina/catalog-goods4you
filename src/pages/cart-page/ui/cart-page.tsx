import { Header } from "../../../widgets/header";
import { PageTitle } from "../../../shared/ui";
import { Footer } from "../../../widgets/footer";
import { CartProductItem } from "../../../shared/ui";
import { cartProductsArray } from "../../../shared/constants/cartProductsArray";
import styles from "./cart-page.module.css";

export const CartPage = () => {
  return (
    <>
      <PageTitle title="My cart | Goods4you" />
      <Header />
      <section className={styles.cart}>
        <h2 className={styles.cartTitle}>My cart</h2>
        <div className={styles.cartContainer}>
          <div className={styles.cartForm}>
            {cartProductsArray.map((item) => (
              <CartProductItem
                link={item.link}
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
          <div className={styles.cartTotal}>
            <div className={styles.priceCalculation}>
              <div className={styles.calculationItem}>
                <span className={styles.priceTotal}>Total count</span>
                <span className={styles.total}>3 items</span>
              </div>
              <div className={styles.calculationItem}>
                <span className={styles.priceDiscount}>
                  Price without discount
                </span>
                <span className={styles.discount}>$700</span>
              </div>
            </div>
            <div className={styles.calculationItem}>
              <span className={styles.priceFinal}>Total price</span>
              <span className={styles.final}>$590</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
