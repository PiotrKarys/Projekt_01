import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src="https://placehold.co/400x400/1a1a1a/535bf2?text=PK"
            alt="Zdjęcie Piotrasa"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>O mnie</h2>
          <p className={styles.subtitle}>
            Jestem specjalistą ds. bezpieczeństwa i entuzjastą web developmentu.
          </p>
          <p className={styles.subtitle}>
            Po godzinach lubię grać w gry online i oglądać filmy. Lubię również
            programować i tworzyć nowe projekty.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
