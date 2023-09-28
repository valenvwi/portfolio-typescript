import footerImg from "../assets/images/footer-wave.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const FooterContainer = styled.div`
  color: white;
  background-color: black;
  padding-bottom: 50px;
  text-align: center;
  width: 100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 10px;
`;

const FooterLogo = styled.h5`
  font-family: "Kalam";
  font-size: 28px;
`;

const FooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterImg = styled.img`
  margin-bottom: -10px;
  width: 100%;
`;

const FooterIcon = styled.a`
  font-size: 28px;
  margin: 0 5px;
`;

export const Footer = () => {
  return (
    <>
      <FooterImg src={footerImg} alt="footer-wave" />
      <FooterContainer>
        <div className="col-12 col-md-4">
          <FooterLogo>Wai Ian</FooterLogo>
        </div>
        <FooterText className="col-12 col-md-4">
          <p>This portfolio is made with React in Sep 2023.</p>
        </FooterText>
        <div className="col-12 col-md-4">
          <FooterIcon
            href="https://github.com/valenvwi"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
          </FooterIcon>
          <FooterIcon
            href="https://www.linkedin.com/in/amywaiianvong/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} />
          </FooterIcon>
          <FooterIcon
            href="https://www.instagram.com/wai_inderschweiz/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
          </FooterIcon>
        </div>
      </FooterContainer>
    </>
  );
};
