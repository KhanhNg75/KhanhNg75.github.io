import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import ServiceSection from "../components/ServiceSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
