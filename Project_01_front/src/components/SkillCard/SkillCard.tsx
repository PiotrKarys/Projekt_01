import styles from "./SkillCard.module.css";
import { useInView } from "react-intersection-observer";

type SkillCardProps = {
  name: string;
  index: number;
};

const SkillCard = ({ name, index }: SkillCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`${styles.skillCard} ${inView ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className={styles.skillName}>{name}</span>
    </div>
  );
};
export default SkillCard;
