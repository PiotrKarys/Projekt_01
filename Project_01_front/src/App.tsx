import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import HeroSection from "./components/HeroSection.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="Piotras"
        subtitle="Specjalista ds. bezpieczeństwa & Entuzjasta Web Developmentu."
      />
    </div>
  );
}

export default App;
