import React from 'react'
import styled from 'styled-components'
const Logo = ({height}) => {
    return (
        <LogoWrapper meh={height}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1335 167.846">
            <path id="SSB_Primary_Red_RGB" d="M744.462,389.659c0,33.771,49.663,61.919,49.663,97.9,0,20.506-17.478,27.747-32.762,27.747-12.816,0-26.93-2.82-33.771-10.253l-4.63-34.78h2.019c5.831,25.537,23.117,40.4,37.584,40.4,9.052,0,15.684-5.831,15.684-18.488,0-24.527-51.666-61.518-51.666-97.5,0-14.274,11.054-26.129,30.151-26.129,14.418,0,20.506,3.412,28.356,8.843l3.813,31.352h-2.019c-6.632-21.9-17.622-35.165-29.141-35.165C750.085,373.59,744.462,378.877,744.462,389.659Zm84.2,76.658c-5.367,0-8.331-7.065-8.331-24.447v-40.82h17.622v-3.2H820.335V369.537H817.5c-1.6,18.792-4.229,27.555-19.625,28.26V401h10.3v45.162c0,16.661,7.77,24.287,18.087,24.287,6.5,0,12-4.085,15.828-13.7l-2.98-1.266c-2.964,7.578-6.921,10.83-10.445,10.83ZM698.2,536.406h5.623V368.56H698.2ZM395.5,373.59c13.073,1.394,20.106,5.223,20.106,14.867V495.394c0,9.612-7.033,13.473-20.106,14.883v2H454.78v-2.035c-13.073-1.41-20.106-5.223-20.106-14.883V388.49c0-9.612,7.033-13.473,20.106-14.867V371.6H395.5Zm64.771,43.255h2c1.41-19.9,10.253-40.2,28.757-40.2h5.4V495.442c0,9.612-7.033,13.473-20.09,14.883v2H535.62v-2.083c-13.057-1.41-20.106-5.223-20.106-14.883V376.6h5.431c18.5,0,27.347,20.3,28.741,40.2H551.7V371.572H460.2ZM221.058,389.659c0-10.846,5.639-16.02,13.265-16.02,11.471,0,22.525,13.265,29.157,35.165h2l-3.813-31.352c-7.834-5.431-13.874-8.843-28.34-8.843-19.1,0-30.166,11.855-30.166,26.129,0,35.982,51.666,72.973,51.666,97.5,0,12.656-6.632,18.488-15.668,18.488-14.418,0-31.769-14.867-37.6-40.4h-2l4.614,34.78c6.841,7.433,20.907,10.253,33.771,10.253,15.283,0,32.778-7.241,32.778-27.747C270.722,451.578,221.058,423.43,221.058,389.659Zm106.167,42.614-25.937-60.7H262.7v2.019c13.057,1.394,20.106,5.014,20.106,14.867V495.394c0,9.612-7.049,13.473-16.02,14.883v2h41.2v-2.035c-13.073-1.41-20.106-5.223-20.106-14.883V390.877l32.329,74.367,31.16-79.205V495.394c0,9.612-7.033,13.473-16.02,14.883v2h56.28v-2.035c-13.073-1.41-20.106-5.223-20.106-14.883V388.49c0-9.853,7.033-13.473,20.106-14.867V371.6H351.417ZM859.1,536.406h5.623V368.56H859.1ZM623,373.59c13.073,1.394,20.106,5.223,20.106,14.867v23.326H595.985V388.49c0-10.045,7.033-13.874,20.09-14.867V371.6H556.8v2.019c13.665,1.2,20.106,4.806,20.106,14.867V495.426c0,9.612-7.033,13.473-20.106,14.883v2h59.276v-2.067c-13.057-1.41-20.09-5.223-20.09-14.883V416.8h47.036v78.6c0,9.612-7.033,13.473-20.106,14.883v2h59.276v-2.035c-13.073-1.41-20.106-5.223-20.106-14.883V388.49c0-9.612,7.033-13.473,20.106-14.867V371.6H623Zm677.937,137.3v2h-5.079c-14.418,0-27.139-.4-32.169-13.473-11.455-30.15,8.859-82.617-27.139-82.617h-8.234v78.6c0,9.612,7.033,13.473,20.106,14.883v2h-59.276v-2.035c13.073-1.41,20.106-5.223,20.106-14.883V388.49c0-9.612-7.033-13.473-20.106-14.867V371.6h61.711c21.515,0,32.778,8.843,32.778,22.509,0,9.853-9.26,17.7-26.946,20.506,33.979,2.82,15.075,50.657,25.729,79.814,5.175,14.435,11.006,16.453,18.439,16.453Zm-38.449-116.805c0-8.843-6.232-17.478-18.7-17.478h-15.476l.208,35.245h15.268c12.432-.064,18.664-8.939,18.664-17.767Zm-167,22.717h2.019c1.41-19.9,10.253-40.2,28.741-40.2h5.431V495.394c0,9.612-7.033,13.473-20.106,14.883v2h59.276v-2.035c-13.073-1.41-20.106-5.223-20.106-14.883V376.6h5.431c18.488,0,27.331,20.3,28.741,40.2h2V371.572h-91.477Zm302.786,26.129c0,40.612-22.108,72.38-54.47,72.38s-54.694-31.769-54.694-72.348,22.317-74.367,54.678-74.367,54.47,33.931,54.47,74.367Zm-20.09,0c0-43.015-9.853-69.337-34.38-69.337-24.928,0-34.572,26.322-34.572,69.337,0,41.221,9.612,67.286,34.572,67.286,24.511.032,34.364-26.065,34.364-67.254ZM1058.142,373.59c11.455,0,22.429,13.265,29.157,35.165h2l-3.813-31.352c-7.85-5.431-13.874-8.843-28.356-8.843-19.1,0-30.151,11.855-30.151,26.129,0,35.982,51.666,72.973,51.666,97.5,0,12.656-6.632,18.488-15.684,18.488-14.418,0-31.753-14.867-37.584-40.4h-2.019l4.63,34.78c6.841,7.434,20.907,10.253,33.771,10.253,15.284,0,32.762-7.241,32.762-27.747,0-35.982-49.663-64.082-49.663-97.9C1044.878,378.877,1050.5,373.59,1058.142,373.59Zm342.469,43.255h2.019c1.394-19.9,10.253-40.2,28.741-40.2h5.463V495.442c0,9.612-7.033,13.473-20.106,14.883v2H1476v-2.083c-13.057-1.41-20.09-5.223-20.09-14.883V376.6h5.431c18.488,0,27.331,20.3,28.741,40.2h2V371.572h-91.477Zm-429.54,45.194c0,27.731-9.052,50.24-44.216,50.24H876.391v-2.035c13.073-1.41,20.106-5.223,20.106-14.883V388.49c0-9.612-7.033-13.473-20.106-14.867V371.6h52.675c24.511,0,34.764,8.843,34.764,22.509,0,10.862-11.054,18.3-25.12,20.314C960.017,416.8,971.071,439.915,971.071,462.039Zm-55.479-50.256h6.232c18.7,0,21.916-9.452,21.916-17.494s-3.829-17.622-21.916-17.622h-6.232Zm35.373,51.65c0-21.9-2.611-46.636-31.16-46.636h-4.213v90.468h4.213c28.548,0,31.16-19.449,31.16-43.832Zm57.225,32.041V388.49c0-9.612,7.033-13.473,20.106-14.867V371.6h-59.26v2.019c13.073,1.394,20.106,5.223,20.106,14.867V495.426c0,9.612-7.033,13.473-20.106,14.883v2h59.276v-2.067c-13.089-1.378-20.122-5.191-20.122-14.851Zm-185.325-3.8L811.8,481.632l-.865,1.346,11.935,32.538,11.919-32.538-.865-1.346ZM1508,368.64V536.406h5.623V368.56ZM178.62,536.406h5.639V368.56H178.62Z" transform="translate(-178.62 -368.56)" fill="#dc1e28" />
        </svg>

        <GVWrapper href="https://apps.giverapp.net/smithstbistrot" rel="norefferer" target="_blank"><p>Gift Vouchers</p></GVWrapper>
        </LogoWrapper>
    )
}

export default Logo

export const LogoWrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 56%;
height: 50%;
position: absolute;
z-index: 2;
margin-top: 5rem;
svg {
    width: 100%;
    height: 100%;
}
`
export const GVWrapper = styled.a`
text-decoration: none;
background: whitesmoke;
color: inherit;
p{
    font-size: 1.25rem !important;
}
padding: .75rem 2rem;
font-weight: bold;
justify-content: flex-end;
transition: all 200ms ease-in-out;
&:hover {
    transform: translateY(2px) scale(1.05);
}
`;
