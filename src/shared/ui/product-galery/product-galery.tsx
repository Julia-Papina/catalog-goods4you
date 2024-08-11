import productFoto from "../../assets/icons/product.svg";
import styles from "./product-galery.module.css";
export const ProductGalery = () => {
  return (
    <div className={styles.galery}>
      <img
        className={styles.mainFoto}
        src={productFoto}
        alt="изображение товара"
      />
      <div className={styles.galeryList}>
        <img
          className={styles.itemFoto}
          src={productFoto}
          alt="изображение товара"
        />
        <img
          className={styles.itemFoto}
          src={productFoto}
          alt="изображение товара"
        />
        <img
          className={styles.itemFoto}
          src={productFoto}
          alt="изображение товара"
        />
        <img
          className={styles.itemFoto}
          src={productFoto}
          alt="изображение товара"
        />
        <img
          className={styles.itemFoto}
          src={productFoto}
          alt="изображение товара"
        />
        <img
          className={styles.itemFoto}
          src={productFoto}
          alt="изображение товара"
        />
      </div>
    </div>
  );
};
