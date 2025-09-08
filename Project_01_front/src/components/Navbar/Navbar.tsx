import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.controlsContainer}>
        <button className={styles.themeToggleButton} onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className={styles.hamburgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul
        className={`${styles.navList} ${isMenuOpen ? styles.activeMenu : ""}`}
      >
        <li>
          <a href="#home" className={styles.navLink} onClick={closeMenu}>
            Strona główna
          </a>
        </li>
        <li>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>
            O mnie
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink} onClick={closeMenu}>
            Projekty
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navLink} onClick={closeMenu}>
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
