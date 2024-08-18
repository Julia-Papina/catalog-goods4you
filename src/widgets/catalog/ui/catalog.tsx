// import { useState } from "react";
import { InputSearch, MainButton } from "../../../shared/ui";
import { ProductCard } from "../../../shared/ui";
import styles from "./catalog.module.css";
import { useSearchProductsQuery } from "../../../store/slices/api-slice";
import { ProductType } from "../../../store/types/product-type";


export const Catalog = () => {
  // const [searchQuery, setSearchQuery] = useState<string>('');
  // const [limit, setLimit] = useState<number>(12);
  // const [skip, setSkip] = useState<number>(0);
  // const {data } = useSearchProductsQuery({ q: searchQuery, limit, skip});
  // console.log(data);
  // const userId = '33';
  const { data } = useSearchProductsQuery(undefined);
  //console.log("data", data);
  return (
    <section id="catalog" className={styles.catalog}>
      <h2 className={styles.title}>Catalog </h2>

      <div className={styles.input}>
        <InputSearch search={() => {}} onChange={() => {}} />
      </div>
      <div className={styles.cardsList}>
        {data &&
          data.products.map((item: ProductType) => (
            <ProductCard
              key={item.id}
              link={item.thumbnail}
              id={item.id as number}
              name={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
      </div>
      <div className={styles.catalogButton}>
        <MainButton variant="main" aria-label="Показать больше товаров">
          Show more
        </MainButton>
      </div>
    </section>
  );
};
