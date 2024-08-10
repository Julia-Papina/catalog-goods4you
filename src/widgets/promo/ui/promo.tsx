// import { Header } from "../../header";
import { MainButton } from "../../../shared/ui";
import styles from "./promo.module.css";

export const Promo = () => {
  return (
    <section className={styles.promo} id="promo">
      {/* <Header /> */}

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
        <div className={styles.button}>
          <MainButton variant="main">Go to shopping</MainButton>
        </div>
      </div>
    </section>
  );
};
