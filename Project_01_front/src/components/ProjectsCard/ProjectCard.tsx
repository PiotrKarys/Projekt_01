import React from "react";
import styles from "./ProjectCard.module.css";
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
  return (
    <div className={styles.card}>
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
