import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import bannerPicture from "../../assets/images/lungern.jpg";
import { motion } from "framer-motion";

const Header = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${bannerPicture});
  background-size: cover;
  background-position: center;
  height: 80vh !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 3rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0 8px;
  background-color: #07a7f1ea;
  color: white;
  font-size: 20px;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
  border: none;
`;

const Title = styled.h1`
  margin: 0 15px;
  text-align: center;
`;

const SubTitle = styled.h3`
  margin: 0 15px;
  text-align: center;
`;

const Text = styled.h5`
  font-size: 24px;
  position: absolute;
  left: 100%;
  top: 10%;
  white-space: nowrap;
  padding: 8px 4px;
`;

const Icon = styled.div`
  font-size: 32px;
  margin: 4px;
`;

const whileHover = {
  scale: 1.05,
  backgroundColor: "#16DCEB",
  padding: "15px",
};

const whileTap = { scale: [0.8, 1.1, 0.9, 1] };

export const Banner = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [buttonText, setButtonText] = useState("Give me a like!");

  function handleLike() {
    setLikeCount(likeCount + 1);
    if (likeCount === 0) {
      setButtonText("One more please!");
    } else {
      setButtonText("Thanks a lot!");
    }
  }

  return (
    <Header>
      <Title> Hi! My name is Wai Ian. </Title>
      <SubTitle> I am a junior software developer.</SubTitle>
      <ButtonDiv>
        <Button
          onClick={handleLike}
          as={motion.button}
          whileHover={whileHover}
          whileTap={whileTap}
        >
          {buttonText}
        </Button>
        {likeCount === 0 ? (
          <Icon>
            <FontAwesomeIcon icon={faHeart} color="#ffffff" />
          </Icon>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faHeart} color="#ff0000" />
          </Icon>
        )}
        {likeCount > 1 && <Text> + {likeCount}</Text>}
      </ButtonDiv>
    </Header>
  );
};
