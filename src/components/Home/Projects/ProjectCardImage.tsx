import styled from "styled-components";

const CardImage = styled.img`
  width: 70%;
`;

type Props = { href: string; title: string };

export const ProjectCardImage = ({ href, title }: Props) => {
  return (
    <>
      <CardImage src={href} alt={title}></CardImage>
    </>
  );
};
