import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  const scrollToAnchor = (anchor: string) => {
    setTimeout(() => {
      scroller.scrollTo(anchor, {
        // smooth: true,
        offset: -20,
      });
    }, 1);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Link to={"/"} className={styles.footer__link}>
          Goods4you
        </Link>
        <nav className={styles.footer__nav}>
          <NavLink
            className={styles.footer__navLink}
            to={"/"}
            onClick={() => scrollToAnchor("catalog")}
          >
            Catalog
          </NavLink>
          <NavLink
            className={styles.footer__navLink}
            to={"/"}
            onClick={() => scrollToAnchor("faq")}
          >
            FAQ
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};
