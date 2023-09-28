import avatar from "../../../assets/images/avatar.jpg";
import { AboutMeContent } from "./AboutMeContent";
import styled from "styled-components";

const Title = styled.h1`
  margin: 60px 40px;
`;

const ImgLarge = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 320px;
`;

const ImgSmall = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 180px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const NonMobileContainer = styled.div`
  display: block;
  @media (max-width: 991.98px) {
    display: none;
  }
`;

const NonMobileContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MobileContainer = styled.div`
  display: none;

  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    padding: 0px 15px;
  }
`;

export const AboutMeSection = () => {
  return (
    <Container id="aboutMe">
      <Title>About me</Title>

      {/* Non-mobile version */}
      <NonMobileContainer>
        <div className="row mx-5">
          <div className="col-4">
            <ImgLarge src={avatar} />
          </div>
          <NonMobileContent className="col-sm-12 col-lg-8">
            <AboutMeContent />
          </NonMobileContent>
        </div>
      </NonMobileContainer>

      {/* mobile version */}
      <MobileContainer>
        <ImgSmall src={avatar} />
        <AboutMeContent />
      </MobileContainer>
    </Container>
  );
};
