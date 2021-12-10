import styled from "styled-components";
import img from "../../assets/background.jpg";

export const Container = styled.div`
  background-image: url(${img});

  background-size: cover;
  background-position: top -200px right -50px;
  box-shadow: inset 0 0 0 20000px rgba(255, 0, 150, 0.2);
  height: 86vh;
`;
