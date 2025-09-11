import styles from "./HeroSecion.module.css";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  projects: string;
};

const HeroSection = ({ title, subtitle, projects }: HeroSectionProps) => {
  return (
    <section id="home" className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <a href="#projects" className={styles.ctaButton}>
        {projects}
      </a>
      <ScrollIndicator href="#about" />
    </section>
  );
};
export default HeroSection;
