import styled from "styled-components";
import img from "../../assets/background.jpg";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;

  position: relative;
  z-index: 1;
  .hero--bg {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .img--bg {
    display: flex;

    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    background-image: url(${img});
    background-repeat: fixed no-repeat;

    box-shadow: inset 0 0 0 2000px rgba(255, 0, 100, 0.2);
    background-position: top -300px right -300px;
    background-size: auto;

    @media (max-width: 768px) {
      background-repeat: no-repeat;
      background-position: top -300px right -480px;
    }

    .text--container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 3;
      max-width: 1200px;
      position: absolute;
      padding: 8px 24px 0 0;

      h1 {
        font-weight: 700;
        padding-top: 11rem;
        color: #fff;
        font-size: 3rem;
        text-shadow: 1px 1px 2px #225;

        @media screen and (max-width: 760px) {
          font-size: 2.5rem;
        }
        @media screen and (max-width: 480px) {
          font-size: 2rem;
        }
      }
      p {
        font-weight: 500;
        margin: 1rem 3rem;
        text-shadow: 1px 1px #333;

        margin-top: 24px;
        color: #fff;
        font-size: 1.6rem;
        max-width: 600px;

        @media screen and (max-width: 760px) {
          font-size: 1.8rem;
        }
        @media screen and (max-width: 480px) {
          font-size: 1.2rem;
        }
      }

      button {
        margin-top: 32px;

        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
