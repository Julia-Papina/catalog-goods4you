import { useState } from "react";
import { IconMinus } from "../../assets";
import { IconPlus } from "../../assets";
import { NounsDeclension } from "../../constants/declension";
import styles from "./counter.module.css";

export const Counter = () => {
  const [isNumber, SetIsNumber] = useState(1);
  const increment = () => {
    SetIsNumber(isNumber + 1);
  };
  const decrement = () => {
    if (!isNumber) {
      return;
    }
    SetIsNumber(isNumber - 1 || 1);
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
