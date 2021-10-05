import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../../../images/logo";
import HeroImage from "../heroImage";
import CloseIcon from "./CloseIcon";

const SignUpModal = ({ modalOpen, setModalOpen }) => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = Date.now();

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer 25183d2e-1266-4207-a9d3-a5d9422d94b0"
    );
    myHeaders.append("Timestamp", { timestamp });
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: {
        email: email,
        tags: 'smith street bistro'
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.sproutsend.com/contacts?", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))

      .catch((error) => console.log("error", error));

    setSubmitted(true);
  };
  return (
    <ModalContainer modalOpen={modalOpen}>
      <CloseIcon setModalOpen={setModalOpen} />
      <ContentWrapper>
        <TopWrapper>
          <p>
            <strong>300 SMITH STREET, COLLINGWOOD</strong>
          </p>
          <h1>Opening Summer</h1>
          <p>
          <strong><a href="mailto:info@smithstbistrot.com.au">INFO@SMITHSTBISTROT.COM.AU</a></strong>
          </p>
        </TopWrapper>
        <LogoWrapper>
          <Logo height="80%" />
        </LogoWrapper>
        <BottomWrapper>
          <h1>Wine & Food</h1>
          <h1>French etc.</h1>
        </BottomWrapper>
        <SignUpWrapper>
          {submitted ? (
            <ThankYouWrapper>
              <h1>Thank you very much!</h1>
              <p> We will update you soon with all the latest news!</p>
            </ThankYouWrapper>
          ) : (
            <>
              <p>
                Sign up for updates from the Scott Pickett Group and for
                exclusive first access to bookings
              </p>
              <SignUpForm>
                <EmailInput
                  placeholder="Email*"
                  name="email"
                  type="text"
                  value={email}
                  onChange={handleChange}
                />
                <SignUpButton type="submit" onClick={handleSubmit}>
                  SUBMIT
                </SignUpButton>
              </SignUpForm>
            </>
          )}
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
  justify-content: center;
  align-items: center;
  animation: ${xFadeIn} 150ms ease-out;
`;
const ContentWrapper = styled.div`
margin-top: 10%;  
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
  p {
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
  margin-top: 0.75rem;
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
  padding: 0.25rem 1.75rem;
  margin-top: 1.75rem;
  font-family: Pitch1;
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 4.75rem;
`;

const ThankYouWrapper = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;
  animation: ${xFadeIn} 150ms ease-in-out;
`;
