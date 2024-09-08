import { FC } from "react";
import { clsx } from "clsx";

import type { InputSearchProps } from "./types";
import styles from "./input-search.module.css";

export const InputSearch: FC<InputSearchProps> = ({
  className,
  type = "search",
  ...props
}) => {
  const handleChange = () => {};

  return (
    <div className={clsx(className, styles.inputContainer)}>
      <input
        placeholder="Search by title"
        className={styles.input}
        type={type}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
