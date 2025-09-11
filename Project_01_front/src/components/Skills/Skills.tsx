import styles from "./Skills.module.css";
import SkillCard from "../SkillCard/SkillCard";
const skillsData = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "REST API" },
];

const Skills = () => {
  return (
    <section id="skill" className={styles.skillsSection}>
      <h2 className={styles.title}>Technologie i Umiejętności</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} name={skill.name} index={index} />
        ))}
      </div>
    </section>
  );
};
export default Skills;
