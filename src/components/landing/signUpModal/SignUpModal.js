import React from "react";
import styled, { keyframes }  from "styled-components";
import Logo from "../../../images/logo";
import HeroImage from "../heroImage";
import CloseIcon from "./CloseIcon";

const SignUpModal = ({modalOpen, setModalOpen}) => {
    console.log(`modalOpen`, modalOpen)
  return (
    <ModalContainer modalOpen={modalOpen}>
        <CloseIcon setModalOpen={setModalOpen}/>
      <ContentWrapper>
        <TopWrapper>
          <p>
            <strong>300 SMITH STREET, COLLINGWOOD</strong>
          </p>
          <h1>Opening Summer</h1>
          <p>
            <strong>INFO@SMITHSTREETBISTROOT.COM.AU</strong>
          </p>
        </TopWrapper>
        <LogoWrapper>
        <Logo height="80%"/>
        </LogoWrapper>
        <BottomWrapper>
        <h1>Wine & Food</h1>
        <h1>French etc.</h1>
        </BottomWrapper>
        <SignUpWrapper>
          <p>
            Sign up for updates from the Scott Pickett Group and for exclusive
            first access to bookings
          </p>
          <SignUpForm>
            <EmailInput placeholder="Email*"/>
          </SignUpForm>
          <SignUpButton>SUBMIT</SignUpButton>
        </SignUpWrapper>
      </ContentWrapper>
    </ModalContainer>
  );
};

export default SignUpModal;


export const xFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;}
 
  100% {
    opacity: 1;
    display: flex;}
`
const ModalContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #640002;
  display: ${props => props.modalOpen === true ? `flex` : `none`};
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  animation: ${xFadeIn} 150ms ease-out;
`;
const ContentWrapper = styled.div`
  width: 83%;
  justify-content: center;
  align-items: center;
`;
const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 7.25rem;
`;
const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 8rem;
  justify-content: center;

`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
margin-top: 1rem;
  align-items: center;
  width: 100%;
  p{
      font-size: 90%;
      width: 45%;
      text-align: center;
      color: white;
  }
`;
const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: .75rem;
  width: 45%;
`;
const EmailInput = styled.input`
  width: 100%;
  height: 2.2rem;
  border: 1px solid white;
  background: none;
  color: white;
   margin-top: 1.25rem;
   ::placeholder {
       color: white;
       /* padding: 1rem; */
       font-size: 1rem;
   }
   :focus {
    outline: none;
    background: transparent;
    color: white;
   
    font-size: 125%;
  }
  :valid {
    font-size: 1rem;
    background: transperant;
    color: white;
    padding: 0 1rem;
  }
  ::-moz-focus-outer {
    color: white;
  }
`;

const SignUpButton = styled.button`
  background: white;
  border: none;
  padding: .25rem 1.75rem;
  margin-top: 1.75rem;
  font-family: Pitch1;
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 4.75rem;
`;
