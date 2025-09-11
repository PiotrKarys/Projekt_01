import styles from "./ProjectCard.module.css";
import { useInView } from "react-intersection-observer";

export type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
}: ProjectCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-30% 0px -30% 0px",
  });
  return (
    <div ref={ref} className={`${styles.card} ${inView ? styles.visible : ""}`}>
      <img
        src={imageUrl}
        alt={`${title} screenshot`}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardTech}>
          {technologies.map(tech => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
