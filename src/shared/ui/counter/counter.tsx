import { useState } from "react";
import { IconMinus } from "../../../assets";
import { IconPlus } from "../../../assets";
import { NounsDeclension } from "../../constants/declension";
import styles from "./counter.module.css";

export const Counter = () => {
  const [isNumber, SetIsNumber] = useState(0);
  const increment = () => {
    SetIsNumber(isNumber + 1);
  };
  const decrement = () => {
    if (!isNumber) {
      return;
    }
    SetIsNumber(isNumber - 1 || 0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={decrement}>
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
        <button className={styles.button} onClick={increment}>
          <img src={IconPlus} className={styles.icon} alt="иконка плюс" />
        </button>
      </div>
    </div>
  );
};
