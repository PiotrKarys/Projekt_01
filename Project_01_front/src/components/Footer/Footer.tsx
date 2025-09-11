import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Piotr Karyś. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};

export default Footer;
