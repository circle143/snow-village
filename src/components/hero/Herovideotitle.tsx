import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import type { HeroVideoTitleProps } from "./types";
import styles from "./Herovideotitle.module.css";

const HeroVideoTitle = ({ image, currentPage, title }: HeroVideoTitleProps) => {
  return (
    <Container
      variant={ContainerVariant.full}
      className={`${styles["hero"]} ${styles[currentPage]}`}
    >
      <video
        className={styles["video"]}
        src={image}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles["overlay"]} />
      {title && (
        <div className={styles["title-wrapper"]}>
          <h1 className={styles["title"]}>{title}</h1>
        </div>
      )}
    </Container>
  );
};

export default HeroVideoTitle;