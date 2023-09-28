import { Banner } from "./Banner";
import { AboutMeSection } from "./AboutMe/AboutMeSection";
import { ProjectsSection } from "./Projects/ProjectsSection";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutMeSection />
      <ProjectsSection />
    </>
  );
};
