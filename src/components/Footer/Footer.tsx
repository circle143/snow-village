import { footer } from "@/utils/nav";
import styles from "./footer.module.css";
import { Fragment } from "react";
import Container from "../container/Container";
import { ContainerVariant } from "../container/types";
import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["background"]}>
        <img src="/footer.png" />
      </div>

      <Container variant={ContainerVariant.full} className={styles["link"]}>
        <div className={styles["link-group"]}>
          <div className={styles["important-links"]}>
            <h4 className={styles["heading"]}>
              {footer.importantLinks.heading}
            </h4>

            {footer.importantLinks.items.map((item, ind) => {
              return (
                <div key={item.value + ind}>
                  <Link
                    to={item.value}
                    target={item.newPage ? "_blank" : "_self"}
                  >
                    {item.key}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className={styles["more"]}>
            <h4 className={styles["heading"]}>{footer.more.heading}</h4>

            {footer.more.items.map((item, ind) => {
              return (
                <div key={item.value + ind}>
                  <Link
                    to={item.value}
                    key={item.value}
                    target={item.newPage ? "_blank" : "_self"}
                  >
                    {item.key}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles["social"]}>
          <h4 className={styles["heading"]}>{footer.socialLinks.heading}</h4>

          {footer.socialLinks.items.map((item, ind) => {
            return (
              <a href={item.link} key={item.link + ind} target={"_blank"}>
                <img src={item.image} />
              </a>
            );
          })}
        </div>
      </Container>

      <Container variant={ContainerVariant.normal}>
        <p className={styles["copyright"]}>
          {footer.copyright.map((item) => {
            if (item.href) {
              return (
                <a href={item.href} target="_blank">
                  {item.text}
                </a>
              );
            }
            return <Fragment key={item.text}>{item.text}</Fragment>;
          })}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
