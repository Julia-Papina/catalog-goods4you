import { MainButton } from "../../../shared/ui";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import styles from "./promo.module.css";

export const Promo = () => {
  const scrollToAnchor = (anchor: string) => {
    setTimeout(() => {
      scroller.scrollTo(anchor, {
        // smooth: true,
        offset: -20,
      });
    }, 1);
  };
  return (
    <section className={styles.promo} id="promo">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Any products from famous brands <br />
          with worldwide delivery
        </h1>
        <h2 className={styles.subtitle}>
          We sell smartphones, laptops, clothes, shoes <br />
          and many other products at low prices
        </h2>
        <p className={styles.subtitleBack}>Goods4you</p>
        <Link
          to={"/"}
          className={styles.button}
          onClick={() => scrollToAnchor("catalog")}
        >
          <MainButton variant="main" aria-label="Начать покупки">Go to shopping</MainButton>
        </Link>
      </div>
    </section>
  );
};
