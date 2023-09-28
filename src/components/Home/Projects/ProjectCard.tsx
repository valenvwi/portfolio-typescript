import { ProjectTechIcons } from "./ProjectTechIcons";
import { ProjectButton } from "./ProjectButton";
import { ProjectCardImage } from "./ProjectCardImage";
import styled from "styled-components";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Text = styled.h5`
  padding: 10px;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NonMobileContainer = styled.div`
  display: block;
  text-align: center;
  padding: 10px 0;
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const Card = styled.div`
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #d7dde2;
  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.176);
  position: relative;
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const TechIconDiv = styled.div`
  margin-bottom: 25px;
`;

const ButtonDiv = styled.div`
  text-align: center;
  margin: 5px auto;
`;

type Props = {
  title: string;
  description: string;
  icons: string[];
  button: { href: string; title: string };
  image: { href: string; title: string };
  imageSide: string;
};

export const ProjectCard = ({
  title,
  description,
  icons,
  button,
  image,
  imageSide,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const showCard = {
    transform: isInView ? "translateY(20px)" : "translateX(0)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <Card className="row" ref={ref} style={showCard}>
      {imageSide === "left" && (
        <NonMobileContainer className="col-lg-4">
          <ProjectCardImage href={image.href} title={image.title} />
        </NonMobileContainer>
      )}

      <ContentContainer className="col-sm-12 col-md-8">
        <div>
          <h1>{title}</h1>
          <Description>{description}</Description>
          <Text>Tech-Stack</Text>
          <div className="row">
            <TechIconDiv className="col-sm-12 col-lg-8">
              {icons.map((icon) => (
                <ProjectTechIcons key={icon} icon={icon} />
              ))}
            </TechIconDiv>
            <ButtonDiv className="col-sm-12 col-lg-4">
              <ProjectButton website={button.href} title={button.title} />
            </ButtonDiv>
          </div>
        </div>
      </ContentContainer>

      {imageSide === "right" && (
        <NonMobileContainer className="col-lg-4">
          <ProjectCardImage href={image.href} title={image.title} />
        </NonMobileContainer>
      )}
    </Card>
  );
};
