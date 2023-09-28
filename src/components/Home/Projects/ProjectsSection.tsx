import { ProjectCard } from "./ProjectCard";
import styled from "styled-components";
import {
  firstIcons,
  secondIcons,
  thirdIcons,
  buttons,
  images,
  titles,
  descriptions,
} from "./constants";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.h1`
  margin: 60px 40px;
  text-align: end;
`;

export const ProjectsSection = () => {
  return (
    <Container id="projects">
      <Header>Projects</Header>
      <ProjectCard
        title={titles[0]}
        description={descriptions[0]}
        icons={firstIcons}
        button={buttons[0]}
        image={images[0]}
        imageSide="right"
      />
      <ProjectCard
        title={titles[1]}
        description={descriptions[1]}
        icons={secondIcons}
        button={buttons[1]}
        image={images[1]}
        imageSide="left"
      />
      <ProjectCard
        title={titles[2]}
        description={descriptions[2]}
        icons={thirdIcons}
        button={buttons[2]}
        image={images[2]}
        imageSide="right"
      />
    </Container>
  );
};
