import React from "react";
import styled from 'styled-components'
const CloseIcon = ({setModalOpen}) => {
  return (
    <CloseIconWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 35"
      onClick={() => setModalOpen(false)}
      >
        <text
          id="X"
          fill="#fff"
          fontSize="35"
          fontFamily="Helvetica-Light, Helvetica"
          fontWeight="100"
        >
          <tspan x="10.693" y="27">
            X
          </tspan>
        </text>
      </svg>
    </CloseIconWrapper>
  );
};

export default CloseIcon;

const CloseIconWrapper = styled.div`
position: absolute;
top: 7.5%;
right: 12.25%;
z-index: 4;
fill: white;
height: 2.5rem;
width: 2.25rem;
`