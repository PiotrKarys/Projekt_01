import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <a href="/" className={styles.navLink}>
            Strona główna
          </a>
        </li>
        <li>
          <a href="/about" className={styles.navLink}>
            O mnie
          </a>
        </li>
        <li>
          <a href="/projects" className={styles.navLink}>
            Projekty
          </a>
        </li>
        <li>
          <a href="/contact" className={styles.navLink}>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
