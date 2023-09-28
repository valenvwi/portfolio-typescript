import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled.a`
  padding: 1rem 2rem;
  margin: 0 5px;
  background-color: #07a7f1ea;
  color: white;
  font-size: 20px;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
  border: none;
`;

type Props = { website: string; title: string };

export const ProjectButton = ({ website, title }: Props) => {
  return (
    <>
      <a href={website} target="_blank" rel="noreferrer">
        <Button
          as={motion.button}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#16DCEB",
            padding: "15px",
          }}
        >
          {title}
        </Button>
      </a>
    </>
  );
};
