import styles from "./Skills.module.css";

const skillsData = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "Git" },
  { name: "PostgreSQL" },
  { name: "REST API" },
  { name: "CSS Grid" },
  { name: "Flexbox" },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Technologie i Umiejętności</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map(skill => (
          <div key={skill.name} className={styles.skillCard}>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
