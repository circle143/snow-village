import { navLinks } from "@/utils/nav";
import BookTicketsButton from "../book-tickets-button/BookTicketsButton";
import styles from "./nav.module.css";
import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav className={styles["nav"]}>
      <Container
        variant={ContainerVariant.normal}
        className={styles["container"]}
      >
        <div className={styles["first"]}>
          <NavLinks />
          <img src={navLinks.logo} />
        </div>

        <div className={styles["second"]}>
          <div className={styles["phone"]}>
            <div className={styles["phone-image"]}>
              <img src={navLinks.doubts.image} />
            </div>

            <div className={styles["phone-info"]}>
              <p>{navLinks.doubts.text}</p>

              <a href={`tel:${navLinks.doubts.phone}`}>
                {navLinks.doubts.phone}
              </a>
            </div>
          </div>

          <BookTicketsButton />
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
