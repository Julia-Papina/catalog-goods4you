import { useState } from "react";
import styles from "./product-galery.module.css";
export const ProductGalery = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(images?.[0]);
  const handleImagesClick = (image: string) => {
    setCurrentImage(image);
  };
  return (
    <div className={styles.galery}>
      <img
        className={styles.mainFoto}
        src={currentImage}
        alt="изображение товара"
      />
      <div className={styles.galeryList}>
        {images?.length > 1 &&
          images?.map((item) => {
            return (
              <img
                className={styles.itemFoto}
                src={item}
                alt="изображение товара"
                onClick={() => handleImagesClick(item)}
              />
            );
          })}
      </div>
    </div>
  );
};
