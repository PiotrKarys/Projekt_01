import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <button
        className={styles.hamburgerButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <a href="#home" className={styles.navLink}>
            Strona główna
          </a>
        </li>
        <li>
          <a href="#about" className={styles.navLink}>
            O mnie
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink}>
            Projekty
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navLink}>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
