import React from "react";
import Logo from "../../images/logo";
import HeroImage from "./heroImage";
import styled from "styled-components";
import SignUpModal from "./signUpModal/SignUpModal";

const DesktopPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);


  return (
    <DesktopWrapper>
      <PageContainer>
        <TopContainer>
          <p>
            <strong>300 SMITH STREET, COLLINGWOOD</strong>
          </p>
          <h1>Opening Summer</h1>
          <p>
          <strong><a href="mailto:info@smithstbistrot.com.au">INFO@SMITHSTBISTROT.COM.AU</a></strong>
          </p>
        </TopContainer>
        <ImgContainer>
          <HeroImage />
          <Logo />
        </ImgContainer>
        <BottomContainer>
          <h1>Wine & Food</h1>
          <SignUpWrapper onClick={() => setModalOpen(!modalOpen)}>
            <p
              style={{
                textAlign: `center`,
                borderBottom: `red 1px solid`,
              }}
            >
              Sign up for updates from the Scott Pickett Group and{" "}
            </p>
            <p
              style={{
                textAlign: `center`,
                borderBottom: `red 1px solid`,
              }}
            >
              for exclusive first access to bookings
            </p>
          </SignUpWrapper>
          <h1>French etc.</h1>
        </BottomContainer>
      </PageContainer>
      <SignUpModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </DesktopWrapper>
  );
};

export default DesktopPage;

const DesktopWrapper = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`;

const PageContainer = styled.div`
  height: 100vh;
  width: 84%;
  flex-direction: column;
  overflow: hidden;
  padding: 0 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media screen and (max-width: 450px) {
    height: ${(props) => props.height} !important;
    flex-direction: column;
    padding: 0;
    width: 100vw;
    justify-content: center;
    align-items: center;
  } */
`;

const TopContainer = styled.div`
  height: 8%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media (max-width: 450px) {
    order: 1;
    width: 100%;
    flex-grow: 1;
  } */
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media screen and (max-width: 450px) {
    width: 100vw;
    max-height: 30vh;
    z-index: 10;
  } */
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  :hover {
    cursor: pointer;
}
`;

const SignupContainer = styled.div`
  width: 88%;
  height: auto;
  :hover {
    cursor: pointer;
}
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 78%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 450px) {
    width: 100vw;
  }
`;
