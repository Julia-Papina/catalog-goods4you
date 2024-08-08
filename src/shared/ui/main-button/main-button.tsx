import { FC } from "react";
import type { MainButtonProps } from "./types";
import styles from "./main-button.module.css";

export const MainButton: FC<MainButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  const getClassnameForType = (buttonType: "main" | "secondary") => {
    switch (buttonType) {
      case "main":
        return styles.buttonMain;
      case "secondary":
        return styles.buttonSecondary;
      default:
        return "";
    }
  };
  return (
    <button {...props} className={getClassnameForType(variant)}>
      <div className={styles.buttonContainer}>{children}</div>
    </button>
  );
};
