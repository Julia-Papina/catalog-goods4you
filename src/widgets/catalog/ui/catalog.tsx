import { InputSearch, MainButton } from "../../../shared/ui";
import { ProductCard } from "../../../shared/ui";

import { catalogArray } from "../../../shared/constants/catalog-array";
import styles from "./catalog.module.css";

export const Catalog = () => {
  return (
    <section id="catalog" className={styles.catalog}>
      <h2 className={styles.title}>Catalog </h2>

      <div className={styles.input}>
        <InputSearch search={() => {}} onChange={() => {}} />
      </div>

      <div className={styles.cardsList}>
        {catalogArray.map((item) => (
          <ProductCard
            key={item.id}
            link={item.link}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.catalogButton}>
        <MainButton variant="main">Show more</MainButton>
      </div>
    </section>
  );
};
