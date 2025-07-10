import { type ContainerProps } from "./types";
import styles from "./container.module.css";

const Container = ({ variant, children, className }: ContainerProps) => {
  return (
    <div className={`${styles["container"]} ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
