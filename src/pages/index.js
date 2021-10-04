import * as React from "react"
import styled from "styled-components"
import Seo from "../components/seo"
import { GlobalStyle } from "../components/styled-components/Theme"
import Logo from "../images/logo"
import { useIsSsr } from "../components/isSsr"
import HeroImage from "../components/landing/heroImage"
import SignUpModal from "../components/landing/signUpModal/SignUpModal"

const IndexPage = () => {
  const isSsr = useIsSsr()
  const checkSsr = (isSsr) => {if(isSsr) return null }
  checkSsr(isSsr)
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <React.Fragment>
      <GlobalStyle />
      <Seo title="Smith St Bistrot" />
      <PageContainer>
        <TopContainer>
          <p>

          <strong>
          300 SMITH STREET, COLLINGWOOD
            </strong>
          </p>
          <h1>Opening Summer</h1>
          <p>
            <strong>
            INFO@SMITHSTREETBISTROOT.COM.AU
            </strong>
            </p>

        </TopContainer>
        <ImgContainer>
     <HeroImage />
      <Logo/>
        </ImgContainer>
        <BottomContainer>
          <h1>Wine & Food</h1>
          <SignUpWrapper onClick={() => setModalOpen(!modalOpen)}
          >
          <p
            style={{
              textAlign: `center`,
              borderBottom: `red 1px solid`,
            }}
          >
            Sign up for updates from the Scott Pickett Group and {" "}
          </p>
          <p
            style={{
              textAlign: `center`,
              borderBottom: `red 1px solid`,
            }}
          >
            for exclusive
            first access to bookings
          </p>
          </SignUpWrapper>
          <h1>French etc.</h1>
        </BottomContainer>
        
      </PageContainer>
      <SignUpModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </React.Fragment>
  )
}

export default IndexPage

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
    height: ${props => props.height} !important;
    flex-direction: column;
    padding: 0;
    width: 100vw;
    justify-content: center;
    align-items: center;
  } */
`

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
`

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
`

const SignUpWrapper = styled.div`
display:flex;
flex-direction: column;
width: 45%;
`

const SignupContainer = styled.div`
  width: 88%;
  height: auto;
  @media screen and (max-width: 450px) {
    width: 100%;
    padding: 0;
  }
`

const ImgContainer = styled.div`

  display: flex;
  width: 100%;
  height: 78%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 450px) {
    width: 100vw;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    width: 90vw;
  }
`

const SocialsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  /* margin-bottom: -.4rem; */

  @media screen and (min-width: 451px) {
    display: none;
  }
`
