import { type ContainerProps } from "./types";
import styles from "./container.module.css";

const Container = ({ variant, children }: ContainerProps) => {
  return (
    <div className={`${styles["container"]} ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default Container;
