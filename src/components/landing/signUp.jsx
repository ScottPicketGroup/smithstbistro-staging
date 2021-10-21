import React from 'react'
import styled from 'styled-components'
const SignUp = () => {
    return (
        <SignUpContainer>
           <Heading>COMING SOON</Heading>
           
        </SignUpContainer>
    )
}

export default SignUp

const SignUpContainer = styled.div`
/* margin-bottom: 1.75rem; */
margin-top: 74px;
@media screen and (max-width: 450px) {
margin-top: 52px;
margin-bottom: 1.15rem;
}

`

const Heading = styled.h1`
margin-bottom: 43px;
@media screen and (max-width: 450px) {
display: none;
}
`

const Para = styled.p`
margin-bottom: 1.75rem;
@media screen and (max-width: 450px) {
margin-bottom: .3rem;
}
`

 