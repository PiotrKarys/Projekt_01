import styles from "./ScrollIndicator.module.css";
import { FaArrowDown } from "react-icons/fa";

type ScrollIndicatorProps = {
  href: string;
};

const ScrollIndicator = ({ href }: ScrollIndicatorProps) => {
  return (
    <a href={href} className={styles.scrollIndicator}>
      <FaArrowDown />
    </a>
  );
};
export default ScrollIndicator;
