import { Header } from "../../header";
import styles from "./promo.module.css";

export const Promo = () => {
  return (
    <section className={styles.promo}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Any products from famous brands <br></br>with worldwide delivery
        </h1>
      </div>
    </section>
  );
};
