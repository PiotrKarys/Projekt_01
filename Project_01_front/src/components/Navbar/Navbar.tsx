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
  const themeToggleButton = (
    <button onClick={toggleTheme} className={styles.themeToggleButton}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
  return (
    <nav className={styles.navbar}>
      <div className={styles.desktopThemeToggle}>{themeToggleButton}</div>
      <button
        className={styles.hamburgerButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
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
        <li className={styles.mobileThemeToggleItem}>{themeToggleButton}</li>
      </ul>
    </nav>
  );
};
export default Navbar;
