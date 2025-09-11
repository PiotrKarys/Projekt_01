import Navbar from "./components/Navbar/Navbar.tsx";
import HeroSection from "./components/HeroSection/HeroSection.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="Piotras"
        subtitle="Specjalista ds. bezpieczeństwa & Entuzjasta Web Developmentu."
      />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
