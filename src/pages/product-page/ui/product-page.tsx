import { PageTitle } from "../../../shared/ui";
import { ProductGalery } from "../../../shared/ui";
import stars from "../../../shared/assets/icons/starts.svg";
import styles from "./product-page.module.css";
import { MainButton } from "../../../shared/ui";
import { useGetProductByIdQuery } from "../../../store/slices/api-slice";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetProductByIdQuery(id);
  console.log("продукт", data);

  return (
    <div className={styles.container}>
      <PageTitle title="Essence Mascara Lash Princess | Goods4you" />
      <section className={styles.product}>
        <div className={styles.content}>
          <ProductGalery />
          <div className={styles.infoProduct}>
            <div className={styles.info}>
              <h2 className={styles.title}>{data?.title}</h2>
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
                {data?.description}
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
                <MainButton
                  variant="main"
                  aria-label="Добавить товар в корзину"
                >
                  Add to cart
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.footerContainer}>{/* <Footer /> */}</div>
    </div>
  );
};
