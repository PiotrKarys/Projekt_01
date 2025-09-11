import styles from "./AboutMe.module.css";
import { useInView } from "react-intersection-observer";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 100,
    rootMargin: "-30% 0px -30% 0px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.aboutSection} ${inView ? styles.visible : ""}`}
    >
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
      <ScrollIndicator href="#projects" />
    </section>
  );
};
export default AboutMe;
