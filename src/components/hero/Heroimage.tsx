import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import type { HeroImageProps } from "./types";
import styles from "./Heroimage.module.css";

const HeroImage = ({ image, currentPage, title }: HeroImageProps) => {
  return (
    <Container
      variant={ContainerVariant.full}
      className={`${styles["hero"]} ${styles[currentPage]}`}
    >
      <img className={styles["image"]} src={image} alt="" />
      {title && (
        <>
          <div className={styles["overlay"]} />
          <div className={styles["title-wrapper"]}>
            <h1 className={styles["title"]}>{title}</h1>
          </div>
        </>
      )}
    </Container>
  );
};

export default HeroImage;