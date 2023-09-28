import styled from "styled-components";

const TechIcon = styled.img`
  margin-top: 10px;
  margin-right: 3px;
  width: 40px;
`;

export const ProjectTechIcons = ({ icon }: { icon: string }) => {
  return (
    <>
      <TechIcon src={icon}></TechIcon>
    </>
  );
};
