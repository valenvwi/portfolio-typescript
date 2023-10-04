import { Banner } from "./Banner";
import { AboutMeSection } from "./AboutMe/AboutMeSection";
import { ProjectsSection } from "./Projects/ProjectsSection";
import { motion, useScroll, useTransform } from "framer-motion";

export const HomePage = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 400, 800], [1, 0.8, 0.6]);
  return (
    <>
      <motion.div style={{ opacity: opacity }}>
        <Banner />
      </motion.div>
      <AboutMeSection />
      <ProjectsSection />
    </>
  );
};
