import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src="https://placehold.co/400x400/1a1a1a/535bf2?text=PK"
            alt="Zdjęcie Piotrasa"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>
            <p>O mnie</p>
          </h2>
          <p>
            Jestem specjalistą ds. bezpieczeństwa i entuzjastą web developmentu.
          </p>
          <p>
            Po godzinach lubię grać w gry online i oglądać filmy. Lubię również
            programować i tworzyć nowe projekty.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
