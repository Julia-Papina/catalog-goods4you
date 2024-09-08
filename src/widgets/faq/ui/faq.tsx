import { MenuFaq } from "../../../shared/ui";
import styles from "./faq.module.css";
export const Faq = () => {
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.faq__container}>
        <h3 className={styles.faq__title}>FAQ</h3>
        <MenuFaq />
      </div>
    </section>
  );
};
