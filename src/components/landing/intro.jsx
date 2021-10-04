import React from 'react'
import styled from 'styled-components'
const Intro = () => {
    return (
        <MobContainer>
        <Heading>COMING SOON</Heading>
     <Para>
         Sign up for updates from the Scott Pickett Group and to be the first to know when our new site is live.
     </Para>
     </MobContainer>
    )
}

export default Intro

const MobContainer = styled.div`
@media screen and (max-width: 450px) {
    padding: 56px 18px 0 18px;
}
`

const Heading = styled.h1`
margin-bottom: 24px;
@media screen and (min-width: 451px) {
display: none;
}
`

const Para = styled.p`
margin-top: 1.26rem;
margin-bottom: 1.5rem;
@media screen and (max-width: 450px) {
margin-top: 0;
margin-bottom: 1.5rem;
}
`