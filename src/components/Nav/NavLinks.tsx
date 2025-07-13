import { navLinks } from "@/utils/nav";
import styles from "./nav.module.css";
import { useMediaQuery } from "usehooks-ts";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NavSm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles["links-sm"]}>
      <img
        src="/menu.svg"
        onClick={() => {
          setOpen(!open);
        }}
      />

      <div
        className={styles["links"]}
        {...(open && {
          "data-open": true,
        })}
      >
        <img
          src="/x.svg"
          onClick={() => {
            setOpen(!open);
          }}
        />

        {navLinks.links.map((item) => {
          return (
            <Link
              to={item.value}
              key={item.value}
              activeProps={{
                "data-active": true,
              }}
              onClick={() => setOpen(false)}
            >
              {item.key}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const NavLinks = () => {
  const matches = useMediaQuery("(min-width: 64em)");

  return !matches ? (
    <NavSm />
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
