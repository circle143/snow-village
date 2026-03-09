import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import type { HeroProps } from "./types";
import styles from "./hero.module.css";

const Hero = ({ image, currentPage }: HeroProps) => {
  return (
    <Container
      variant={ContainerVariant.full}
      className={`${styles["hero"]} ${styles[currentPage]}`}
    >
          <video
        className={styles["image"]}
        src={image}
        autoPlay
        muted
        loop
        playsInline
      />
    </Container>
  );
};

export default Hero;
