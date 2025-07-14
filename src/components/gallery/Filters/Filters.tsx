import Container from "@/components/container/Container";
import styles from "./filters.module.css";
import { ContainerVariant } from "@/components/container/types";
import { galleryPageContent } from "@/utils/galleryPage";
import { Link } from "@tanstack/react-router";

const Filters = () => {
  return (
    <Container variant={ContainerVariant.normal} className={styles["filter"]}>
      {galleryPageContent.image.map(({ category, normalized }) => {
        return (
          <Link
            to="/gallery"
            key={normalized}
            search={{
              filter: normalized,
            }}
            data-font="satoshi"
          >
            {category}
          </Link>
        );
      })}
    </Container>
  );
};

export default Filters;
