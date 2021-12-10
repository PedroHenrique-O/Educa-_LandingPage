import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  :root{

    --mainpurple: #800080;
    --secondarypurple: #630330;
  
   
      
  }
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      -webkit-font-smoothing: antialiased;


      @media (min-width: 1080px){
      font-size: 93.75%;

       }
      @media(max-width: 720px){
          font-size: 87.5%;
      }
      h1, h2, h3, strong{
          font-weight: 600;
      }

      
  }

 



`;
