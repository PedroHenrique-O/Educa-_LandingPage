import styled from "styled-components";

interface Props {
  ImgFirst: boolean;
}

export const Container = styled.div<Props>`
  color: #fff;
  background: #f9f9f9;

  @media (min-width: 768px) {
    padding: 100px 0 0 0;
  }

  .infoWrapper {
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    .infoRow {
      display: grid;
      grid-auto-columns: minmax(auto, 1fr);
      align-items: center;
      grid-template-areas: ${({ ImgFirst }) =>
        ImgFirst ? `'col2 col1'` : `'col1 col2'`};

      @media screen and (max-width: 768px) {
        grid-template-areas: "col2" "col1";
        
      }

      .column1 {
        margin-bottom: 15px;
        padding: 0 15px;
        grid-area: col1;
        .TextWrapper {
          max-width: 540px;
          padding-top: 0;
          padding-bottom: 60px;
          @media screen and (max-width: 768px) {
            background: #ddd;
            box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
            padding: 1.5rem;
            border-radius: 0.75rem;
           
           
       
           
          }

          .topLine {
            color: purple;
            font-size: 16px;
            line-height: 16px;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 20px;

            h1 {
              margin-top: 1rem;
              font-size: 2rem;
              line-height: 1.1;
              font-weight: 500;
              color: Black;
              margin-bottom: 1rem;
              @media screen and (max-width: 768px) {
                font-size: 1.1rem;
                font-weight: 600;
                
                
              }
            }
            p {
              max-width: 440px;
              margin-bottom: 1rem;

              font-size: 15px;
              line-height: 1.1rem;
              color: #222;

              @media (max-width: 768px) {
                text-transform: none;
                font-size: 1rem;
                line-height: 1rem;
                  
                }
 
              .btnWrapp {
                display: flex;
                justify-content: flex-start;

              
              }
            }
          }
        }
        

      }
    }

    
    .column2 {
          margin-bottom: 15px;
          padding: 0 15px;
          grid-area: col2;
          @media screen and (max-width: 768px) {
            margin-bottom: -3rem;
          }
     
 

          .ImgWrapper {
            max-width: 555px;
            height: 100%;
 
    

          img {
            width: 100%;
            margin: 0 0 10px 0;
            padding-right: 0;
    
          }
        }
  }
`;
