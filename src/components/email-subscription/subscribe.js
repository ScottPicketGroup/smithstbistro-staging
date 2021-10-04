import React, { useState } from "react"
import styled from "styled-components"

import Facebook from "./Facebook"
import Instagram from "./Instagram"
const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [signUp, setSignup] = useState(true)
  const [thankyou, setThankyou] = useState(false)

  const handleChange = event => {
    setEmail(event.target.value)
    !email.includes(".") || !email.includes("@")
      ? setEmailErr(true)
      : setEmailErr(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const timestamp = Date.now()
    if ((email && email.includes(".")) || email.includes("@")) {
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
        .then(setSignup(false))
        .then(setThankyou(true))

        .catch(error => console.log("error", error))
    } else {
      setEmailErr(true)
    }
    console.log(`object`)
  }

  return (
    <SubContainer>
      {signUp ? (
        <SignUp onSubmit={handleSubmit}>
          <FormFields>
            <Label>EMAIL ADDRESS</Label>

            <Input
              placeholder="Please enter your email address"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              err={emailErr}
            />
          </FormFields>

          <SignUpSubmit err={emailErr} type="submit" onClick={handleSubmit}>
            SUBSCRIBE
          </SignUpSubmit>
          {/* <SocialsContainer>
            <Instagram/>
              <Facebook/>
             
            </SocialsContainer> */}
        </SignUp>
      ) : (
        <ThankYou>
          <p>Thank you</p> <br/>
          <p>You are now signed up to our mailing list.</p>
        </ThankYou>
      )}
    </SubContainer>
  )
}

export default Subscribe

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: visible;
 
  @media screen and (max-width: 450px) {
    margin-top: 0;
  }
`
const FormFields = styled.div`
  width: 62.5%;
  @media screen and (max-width: 450px) {
width: 100%;
}
`
const SocialsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-bottom: -0.4rem;
  @media screen and (max-width: 450px) {
    display: none;
  }
`

const SignUp = styled.div`
 margin-bottom: 3.5rem;
  font-size: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
flex-direction: column;
justify-content: center;
padding: 0 18px;
}
`
const Label = styled.p`
  font-family: UntitledSansRegular;
  font-size: 1rem;
  line-height: .7;
  letter-spacing: 0.02em;

  @media screen and (max-width: 450px) {
    font-size: 12px !important;
    line-height: 1.33;
    margin-bottom: -0.3rem;
  }
`
const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  height: 3rem;
  
  border-bottom: 1px solid ${props => (props.err ? "#CB0000" : "#153e35")};
  border-radius: 0;
  @media screen and (max-width: 450px) {
height: 1.5rem;
  }

  ::placeholder {
    font-family: UntitledSansLight;
    font-size: 20px;
    line-height: 2.5;
    color: ${props => (props.err ? "#CB0000" : "rgba(21, 62, 53, 50%)")};
    @media screen and (max-width: 450px) {
      font-size: 1rem;
      line-height: 1.33;
    }
  }
  :focus {
    outline: none;
    background: transperant;
    font-family: UntitledSansLight;
    
    font-size: 150%;
  }
  :valid {
    font-size: 20px;
    font-family: UntitledSansLight;
  }
  ::-moz-focus-outer {
    color: white;
  }
  @media screen and (max-width: 450px) {
    padding: 0.75rem 0;
  }
`

const SignUpSubmit = styled.button`
  background: none;
  width: 15%; 
  height: 42px;
  align-self: flex-end;
  
  border: 1px solid ${props => (props.err ? "#CB0000" : "#153e35")};
  color: ${props => (props.err ? "#CB0000" : "#153e35")};
  
  font-size: 16px ;
  transition: all 0.2s ease;
  :hover {
    opacity: ${props => (props.err ? "1" : ".75")};
    background: ${props => (props.err ? "#CB0000" : "#333333")};
    color: ${props => (props.err ? "beige" : "beige")};
  }
  @media screen and (max-width: 450px) {
    font-size: 12px !important;
    width: 126px;
    height: 36px;

    align-self: flex-start;
    
    margin-top: 1.75rem;
    margin-bottom: 2.25rem;
  }
  
`
const ThankYou = styled.div`
display: flex;
flex-direction: column;
`