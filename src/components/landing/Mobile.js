import React from "react";
import Logo from "../../images/logo";
import HeroImage from "./heroImage";
import styled from "styled-components";
import SignUpModal from "./signUpModal/SignUpModal";
import { useStaticQuery, graphql } from "gatsby";

const MobilePage = () => {
  const data = useStaticQuery(graphql`
    query heroImageMob {
      allFile(filter: { name: { in: "heroMob" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <MobileWrapper>
      <PageContainer>
      
    
        <TopContainer>
            <HeaderWrapper>
        <h1>Wine & Food</h1>
        <h1>French etc.</h1>
        </HeaderWrapper>
        <LogoContainer>
        <Logo />
          
        </LogoContainer>
        <h1>Opening Summer</h1>
         
        </TopContainer>
        <ImgContainer>
          <HeroImage data={data} device="mob"/>
          
        </ImgContainer>
        <BottomContainer>
        
          <SignUpWrapper onClick={() => setModalOpen(!modalOpen)}>
            <p
              style={{
                textAlign: `center`,
                borderBottom: `black 1px solid`,
              }}
            >
              Sign up for updates from the Scott Pickett 
            </p>
            <p
              style={{
                textAlign: `center`,
                borderBottom: `black 1px solid`,
              }}
            >
             and{" "} for exclusive first access to bookings
            </p>
          </SignUpWrapper>
          <div>
          <p
          style={{paddingBottom: `.5rem`}}
          >
            300 SMITH STREET, COLLINGWOOD
          </p>
          <p>
            INFO@SMITHSTREETBISTROOT.COM.AU
          </p>
          </div>
        </BottomContainer>
      </PageContainer>
      <SignUpModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </MobileWrapper>
  );
};

export default MobilePage;

const MobileWrapper = styled.div`
  @media (min-width: 451px) {
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
 
  align-items: center;

`;

const TopContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  padding: 16% ;
  justify-content: space-between;
  align-items: center;
flex-direction: column;
`;

const HeaderWrapper = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SignupContainer = styled.div`
  width: 88%;
  height: auto;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
  }
`;

const ImgContainer = styled.div`
  background: black;
  display: flex;
  width: 100%;
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
`;


const LogoContainer = styled.div`
  
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
`;
