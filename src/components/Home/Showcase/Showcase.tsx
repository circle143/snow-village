import Container from "@/components/container/Container";
import { ContainerVariant } from "@/components/container/types";
import Images from "@/components/Images/Images";
import styles from "./showcase.module.css";
import { homePageContent } from "@/utils/homePage";
import BookTicketsButton from "@/components/book-tickets-button/BookTicketsButton";

const Showcase = () => {
  return (
    <Container variant={ContainerVariant.normal} className={styles["showcase"]}>
      <h2 data-font="snow">{homePageContent.gallery.headaing}</h2>

      <Images images={homePageContent.gallery.images} />

      <div>
        <BookTicketsButton extendedText />
      </div>
    </Container>
  );
};

export default Showcase;
