import { Link } from "react-router-dom";
import { MainButton } from "../../../shared/ui/main-button/main-button";
import { Counter } from "../../../shared/ui/counter/counter";
import { BasketIcon } from "../../../shared/assets";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../../store/slices/cart-slice";
import { RootState, AppDispatch } from "../../../store/store";
import { ProductType } from "../../../store/types/product-type";
import styles from "./cart.module.css";

export const CartProductItem: React.FC<{ product: ProductType }> = ({
  product,
}) => {
  const { id, title, price, thumbnail } = product;
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const cartQuantity = useSelector((state: RootState) => {
    const item = state.cart.items.find((item) => item.id === id);
    return item ? item.quantity : 0;
  });

  const updateCartQuantity = async (newQuantity: number) => {
    if (newQuantity <= 0) {
      try {
        await dispatch(
          updateCart({
            userId: userId || 0,
            products: [{ ...product, quantity: cartQuantity }],
          })
        );
      } catch (error) {
        console.error("Failed to update cart:", error);
      }
    } else {
      try {
        await dispatch(
          updateCart({
            userId: userId || 0,
            products: [{ ...product, quantity: newQuantity }],
          })
        );
      } catch (error) {
        console.error("Failed to update cart:", error);
      }
    }
  };

  const handleAddToCart = async () => {
    try {
      await dispatch(
        updateCart({
          userId: userId || 0,
          products: [{ ...product, quantity: 1 }],
        })
      );
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await dispatch(
        updateCart({
          userId: userId || 0,
          products: [{ ...product, quantity: 0 }],
        })
      );
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  return (
    <article className={styles.cart}>
      <div className={styles.cartInfo}>
        <img
          src={thumbnail}
          alt="изображение товара в корзине"
          className={styles.iconProduct}
        />
        <div className={styles.description}>
          <Link to={`/product/${id}`} className={styles.link}>
            <p className={styles.descriptionTitle}>{title}</p>
            <p className={styles.descriptionPrice}>{price}$</p>
          </Link>
        </div>
      </div>
      {cartQuantity > 0 ? (
        <div className={styles.cartCount}>
          <Counter
            quantity={cartQuantity}
            updateCartQuantity={updateCartQuantity}
          />
          <div className={styles.cartDelete}>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={handleDeleteClick}
              aria-label="Удалить товар из корзины"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.cartDelete}>
          <MainButton
            variant="secondary"
            aria-label="Добавить товар в корзину"
            onClick={handleAddToCart}
          >
            <img
              src={BasketIcon}
              alt="Иконка корзины товаров"
              className={styles.basketIcon}
            ></img>
          </MainButton>
        </div>
      )}
    </article>
  );
};
