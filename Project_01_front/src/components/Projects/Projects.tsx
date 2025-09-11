import ProjectCard, {
  type ProjectCardProps,
} from "../ProjectsCard/ProjectCard";
import styles from "./Projects.module.css";

const projectsData: ProjectCardProps[] = [
  {
    title: "System Rezerwacji Online",
    description:
      "Aplikacja full-stack pozwalająca na rezerwowanie terminów wizyt, zbudowana w oparciu o nowoczesne technologie webowe.",
    imageUrl: "https://placehold.co/600x400/1a1a1a/535bf2?text=Projekt+1",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Panel Analityczny Danych",
    description:
      "Interaktywny dashboard do wizualizacji danych sprzedażowych w czasie rzeczywistym, z dynamicznymi wykresami i filtrowaniem.",
    imageUrl: "https://placehold.co/600x400/2a2a2e/f0f0f0?text=Projekt+2",
    technologies: ["React", "D3.js", "TypeScript", "Firebase"],
  },
  {
    title: "Portfolio Strona WWW",
    description:
      "Responsywna strona-wizytówka (ta, którą właśnie oglądasz), stworzona od zera z użyciem Vite i najlepszych praktyk.",
    imageUrl: "https://placehold.co/600x400/101010/ffffff?text=Portfolio",
    technologies: ["React", "Vite", "CSS Modules", "TypeScript"],
  },
];
const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Moje Projekty</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
