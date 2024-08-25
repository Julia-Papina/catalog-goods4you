import { useState, useEffect } from "react";
import { PageTitle } from "../../../shared/ui";
import { ProductGalery } from "../../../shared/ui";
import { StarRed } from "../../../shared/assets";
import { StarWhite } from "../../../shared/assets";
import styles from "./product-page.module.css";
import { MainButton } from "../../../shared/ui";
import {
  useGetProductByIdQuery,
} from "../../../services/api-slice";
import { useParams } from "react-router-dom";
import { Counter } from "../../../shared/ui";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../../store/store";
import { updateCart, selectCartItems } from "../../../store/slices/cart-slice";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  const { data , isLoading } = useGetProductByIdQuery(id || ' ');
  const dispatch = useDispatch<AppDispatch>();
  const quantityProduct = cartItems.find(item => item.id === data?.id)?.quantity || 0;
  //console.log("quantityProduct", quantityProduct);
  //console.log("продукт", data);
  const [isCounter, setIsCounter] = useState(false);
  const handleClickButton = () => {
    setIsCounter(!isCounter);
  };

  useEffect(() => {
    if (data) {
        document.title = `${data.title} | Goods4you`;
    }
}, [data]);

const updateCartQuantity = (newQuantity: number) => {
  if (data && userId) {
      if (newQuantity <= 0) {
          dispatch(updateCart({
              userId,
              products: cartItems.filter(item => item.id !== data.id)
          }));
      } else {
          dispatch(updateCart({
              userId,
              products: cartItems.map(item =>
                  item.id === data.id ? { ...item, quantity: newQuantity } : item
              )
          }));
      }
  }
};

  return (
    <div className={styles.container}>
      <PageTitle title={`${data?.title} | Goods4you`} />
      <section className={styles.product}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.content}>
            <ProductGalery images={data?.images} />
            <div className={styles.infoProduct}>
              <div className={styles.info}>
                <h2 className={styles.title}>{data?.title}</h2>
                <div className={styles.rating}>
                  <div className={styles.ratingStars}>
                    {Array.from(
                      { length: Math.round(data?.rating) },
                      (_, index) => (
                        <img
                          key={index}
                          src={StarRed}
                          alt="rating"
                          className={styles.starImage}
                        />
                      )
                    )}
                    {Array.from(
                      { length: 5 - Math.round(data?.rating) },
                      (_, index) => (
                        <img
                          key={index}
                          src={StarWhite}
                          alt="rating"
                          className={styles.starImage}
                        />
                      )
                    )}
                  </div>

                  <span className={styles.titleSpan}>{data?.category}</span>
                </div>
              </div>

              <div className={styles.descProduct}>
                <h3 className={styles.subtitle}>
                  {`${data?.availabilityStatus} - Only ${data?.stock} left`}!
                </h3>
                <p className={styles.subtitleDescription}>
                  {data?.description}
                </p>
                <div className={styles.deadlines}>
                  <span className={styles.titleSpan}>
                    {data?.warrantyInformation}
                  </span>
                  <span className={styles.titleSpan}>
                    {data?.shippingInformation}
                  </span>
                </div>
              </div>

              <div className={styles.buy}>
                <div className={styles.priceProduct}>
                  <div className={styles.price}>
                    <span className={styles.priceTitle}>
                      {(
                        data?.price -
                        (data?.price * data?.discountPercentage) / 100
                      ).toFixed(2)}
                      $
                    </span>
                    <span className={styles.priceSubtitle}>{data?.price}</span>
                  </div>
                  <div className={styles.discount}>
                    <span className={styles.discountTitle}>Your discount:</span>
                    <span className={styles.discountPrice}>
                      {data?.discountPercentage}%
                    </span>
                  </div>
                </div>

                <div className={styles.buyButton}>
                  {isCounter ? (
                    <Counter quantity={quantityProduct} updateCartQuantity={updateCartQuantity}/>
                  ) : (
                    <MainButton
                      variant="main"
                      aria-label="Добавить товар в корзину"
                      onClick={handleClickButton}
                    >
                      Add to cart
                    </MainButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
