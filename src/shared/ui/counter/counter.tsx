import { useState } from "react";
import { IconMinus } from "../../assets";
import { IconPlus } from "../../assets";
import { NounsDeclension } from "../../constants/declension";
import styles from "./counter.module.css";

export const Counter = ({quantity} : {quantity: number}) => {
  const [isNumber, SetIsNumber] = useState(quantity ? quantity : 0);
  const increment = (evt: React.MouseEvent | React.TouchEvent) => {
    evt.preventDefault();
    SetIsNumber(isNumber + 1);
  };
  const decrement = (evt: React.MouseEvent | React.TouchEvent) => {
    if (!isNumber) {
      evt.preventDefault();
      return;
    }
    evt.preventDefault();
    SetIsNumber(isNumber - 1 || 0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          onClick={decrement}
          aria-label="Минус товар"
        >
          <img src={IconMinus} className={styles.icon} alt="иконка минус" />
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <span className={styles.buttonCount}>{`${isNumber}`}&nbsp;</span>
        <span className={styles.buttonCount}>
          {`${NounsDeclension(isNumber, ["item", "item", "items"])} `}
        </span>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          onClick={increment}
          aria-label="Плюс товар"
        >
          <img src={IconPlus} className={styles.icon} alt="иконка плюс" />
        </button>
      </div>
    </div>
  );
};
