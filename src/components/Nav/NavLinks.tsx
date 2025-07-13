import { navLinks } from "@/utils/nav";
import styles from "./nav.module.css";
import { useMediaQuery } from "usehooks-ts";
import { Link } from "@tanstack/react-router";

const NavLinks = () => {
  const matches = useMediaQuery("(min-width: 64em)");

  return !matches ? (
    <div>
      <img src="/menu.svg" />
    </div>
  ) : (
    <div className={styles["links-lg"]}>
      {navLinks.links.map((item) => {
        return (
          <Link
            to={item.value}
            key={item.value}
            activeProps={{
              "data-active": true,
            }}
          >
            {item.key}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
