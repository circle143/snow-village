import type { ButtonProps } from "./types";
import styles from "./button.module.css";

const Button = ({ variant, onPress, label, fontSize }: ButtonProps) => {
  return (
    <button
      onClick={onPress}
      className={`${styles["button"]} ${styles[variant]} ${styles[fontSize]}`}
    >
      {label}
    </button>
  );
};

export default Button;
