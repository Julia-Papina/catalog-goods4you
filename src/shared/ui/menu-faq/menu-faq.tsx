import { useState } from "react";
import { MenuFaqType } from "./types";
import { faqsArray } from "../../constants/faqsArray";
import styles from "./menu-fuq.module.css";

export const MenuFaq: React.FC<MenuFaqType> = () => {
  const [faqOpen, setFaqOpen] = useState<number[]>([]);

  const toggleFaqMenu = (index: number) => {
    setFaqOpen((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index)
        : [...prevOpen, index]
    );
  };
  return (
    <div className={styles.faqMenu}>
      {faqsArray.map(({ id, title, subtitle }) => (
        <div key={id} className={styles.faqItem}>
          <div
            className={`${styles.faqHeader} ${
              faqOpen.includes(id) ? styles.open : ""
            }`}
            onClick={() => toggleFaqMenu(id)}
            aria-expanded={faqOpen.includes(id)}
            aria-controls={`faq-subtitle-${id}`}
            id={`faq-title-${id}`}
          >
            <h3 className={styles.title}>{title}</h3>
            <span
              className={`${styles.icon} ${
                faqOpen.includes(id) ? styles.open : ""
              }`}
            ></span>
          </div>
          <div
            className={`${styles.faqContentInner} ${
              faqOpen.includes(id) ? styles.open : ""
            }`}
            id={`faq-subtitle-${id}`}
            aria-labelledby={`faq-title-${id}`}
          >
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
