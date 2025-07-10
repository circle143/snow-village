import Container from "@/components/container/Container";
import styles from "./filters.module.css";
import { ContainerVariant } from "@/components/container/types";
import { galleryPageContent } from "@/utils/galleryPage";
import { Link } from "@tanstack/react-router";

const Filters = ({ filter }: { filter: string }) => {
  return (
    <Container variant={ContainerVariant.normal} className={styles["filter"]}>
      {galleryPageContent.image.map(({ category, normalized }) => {
        let classname = "";
        if (filter === normalized) {
          classname = styles["active"];
        }

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
