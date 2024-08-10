import { Header } from "../../../widgets/header";
import { PageTitle } from "../../../shared/ui";
import { Footer } from "../../../widgets/footer";
import { ProductGalery } from "../../../shared/ui";
import stars from "../../../assets/icons/starts.svg";
import styles from "./product-page.module.css";
import { MainButton } from "../../../shared/ui";

export const ProductPage = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Essence Mascara Lash Princess | Goods4you" />
      <Header />
      <section className={styles.product}>
        <div className={styles.content}>
          <ProductGalery />
          <div className={styles.infoProduct}>
            <div className={styles.info}>
              <h2 className={styles.title}>Essence Mascara Lash Princess</h2>
              <div className={styles.rating}>
                <img
                  className={styles.ratingStars}
                  src={stars}
                  alt="рейтинг товара"
                />
                <span className={styles.titleSpan}>
                  electronics, selfie accessories
                </span>
              </div>
            </div>

            <div className={styles.descProduct}>
              <h3 className={styles.subtitle}>In Stock - Only 5 left!</h3>
              <p className={styles.subtitleDescription}>
                The Essence Mascara Lash Princess is a popular mascara known for
                its volumizing and lengthening effects. Achieve dramatic lashes
                with this long-lasting and cruelty-free formula.
              </p>
              <div className={styles.deadlines}>
                <span className={styles.titleSpan}>1 month warranty</span>
                <span className={styles.titleSpan}>Ships in 1 month</span>
              </div>
            </div>

            <div className={styles.buy}>
              <div className={styles.priceProduct}>
                <div className={styles.price}>
                  <span className={styles.priceTitle}>$7.17</span>
                  <span className={styles.priceSubtitle}>$9.99</span>
                </div>
                <div className={styles.discount}>
                  <span className={styles.discountTitle}>Your discount:</span>
                  <span className={styles.discountPrice}>14.5%</span>
                </div>
              </div>

              <div className={styles.buyButton}>
                <MainButton variant="main">Add to cart</MainButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
};
