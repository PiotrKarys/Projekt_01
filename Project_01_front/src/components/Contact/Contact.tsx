import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Kontakt</h2>
      <p className={styles.subtitle}>Skontaktuj się ze mną</p>
      <div className={styles.linksWrapper}>
        <a href="mailto:piotr.karys96@gmail.com" className={styles.contactLink}>
          <FaEnvelope className={styles.icon} /> Email
        </a>
        <a
          href="https://github.com/PiotrKarys"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaGithub className={styles.icon} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/piotr-kary%C5%9B-580a15281/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaLinkedin className={styles.icon} /> LinkedIn
        </a>
      </div>
    </section>
  );
};
export default Contact;
