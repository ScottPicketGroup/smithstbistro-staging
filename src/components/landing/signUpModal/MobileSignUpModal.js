import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../../images/logo";
import HeroImage from "../heroImage";
import CloseIcon from "./CloseIcon";

const MobileSignUpModal = ({ modalOpen, setModalOpen }) => {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const handleChange = event => {
    setEmail(event.target.value)
  
  }
  const handleSubmit = e => {
    e.preventDefault()
    const timestamp = Date.now()
   
      var myHeaders = new Headers()
      myHeaders.append(
        "Authorization",
        "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
      )
      myHeaders.append("Timestamp", { timestamp })
      myHeaders.append("Content-Type", "application/json")

      var raw = JSON.stringify({
        data: {
          email: email,
        },
      })

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }

      fetch("https://api.sproutsend.com/contacts?", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
     
        
        
        .catch(error => console.log("error", error))

setSubmitted(true)
  }
  return (
    <ModalContainer modalOpen={modalOpen}>
      <CloseIcon setModalOpen={setModalOpen} />
      <ContentWrapper>
        <TopWrapper>
          <HeaderWrapper>
            <h1>Wine & Food</h1>
            <h1>French etc.</h1>
          </HeaderWrapper>

          <h1>Opening Summer</h1>
        </TopWrapper>
        <LogoWrapper>
          <Logo height="80%" />
        </LogoWrapper>

        <SignUpWrapper onSubmit={handleSubmit}>
       
         {
           submitted ? (
             <ThankYouWrapper>
             <h1>Thank you very much!</h1>
             <p> We will update you soon with all the latest news!</p>
             </ThankYouWrapper>
           ) :
           (
             <>
            <p>
            Sign up for updates from the Scott Pickett Group and for exclusive
            first access to bookings
          </p>
            <SignUpForm>
            <EmailInput placeholder="Email*"
        
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
            />
            <SignUpButton  type="submit" onClick={handleSubmit}>SUBMIT</SignUpButton>
          </SignUpForm>
          </>
           )
         }
          
        </SignUpWrapper>
        <BottomWrapper>
        <div style={{
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`
          }}>
          <p
          style={{marginBottom: `.5rem`}}
          >
            300 SMITH STREET, COLLINGWOOD
          </p>
          <p>
            INFO@SMITHSTREETBISTROT.COM.AU
          </p>
          </div>
        </BottomWrapper>
      </ContentWrapper>
    </ModalContainer>
  );
};

export default MobileSignUpModal;

export const xFadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;}
 
  100% {
    opacity: 1;
    display: flex;}
`;
const ModalContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #640002;
  display: ${(props) => (props.modalOpen === true ? `flex` : `none`)};
  flex-direction: column;
  justify-content: space-around;
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
  height: 16.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BottomWrapper = styled.div`
  width: 100%;
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  // margin-bottom: 57.5%;
  p {
    color: red;
  }
`;
const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  margin-bottom: 6.75rem;
  justify-content: center;
`;

const SignUpWrapper = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100%;
  p {
    font-size: 90%;
    width: 100%;
    text-align: center;
    color: white;
  }
`;
const ThankYouWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 1rem;
margin-top: -5vh;
height: 10vh;
animation: ${xFadeIn} 150ms ease-in-out;

`
const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.95rem;
  width: 85%;
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
  padding: 0.5rem 3rem;
  margin-top: 1.75rem;
  font-family: Pitch1;
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 5.75rem;
`;
