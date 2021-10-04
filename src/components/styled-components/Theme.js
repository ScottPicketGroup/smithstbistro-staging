import { createGlobalStyle } from "styled-components"

import Pitch from "../../fonts/Pitch.woff"
import Pitch2 from "../../fonts/Pitch-Regular.woff2"
import Ogg from "../../fonts/Ogg.woff"
import Times from "../../fonts/timr45w.ttf"
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    
}
font-family: 'Times';
        src: local('Times'),
        url(${Times}) format('ttf'),
    }


@font-face {
  font-family: 'Pitch1';
  src: url(${Pitch2}) format('woff2'),
       url(${Pitch}) format('woff');
}
@font-face {
  font-family: 'Ogg';
  src: url(${Ogg}) format('woff');
       
}

    
  body {
    color: #DC1E28;
    background: #ffffff;

  }
  h1 {
      font-family: Ogg;
      font-weight: 800;
      font-size: 1.75rem;
      line-height: 1;
  
   
  }

  p {
      font-family: Pitch1;
      font-size: 1rem;
     
      
      margin-bottom: 0;
  }
  /* button {
      font-family: UntitledSansRegular;
      font-size: .71rem;
      line-height: 1;
      letter-spacing: 20;
      color: #333333;
  } */

  @media screen and (max-width: 450px) {
    h1 {
        font-size: 1.25rem;
        line-height: 1.2;
        
    }
    p {
        font-size: 1rem;
        line-height: 1.25;
    }
    
}
`
