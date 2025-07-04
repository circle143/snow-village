import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import type { HeroProps } from "./types";
import styles from "./hero.module.css";

const Hero = ({ image, currentPage }: HeroProps) => {
  return (
    <Container variant={ContainerVariant.full}>
      <img
        className={`${styles["image"]} ${styles[currentPage]}`}
        src={image}
        alt=""
      />
    </Container>
  );
};

export default Hero;
