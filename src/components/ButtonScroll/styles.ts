import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  margin-top: 3rem;
  border-radius: 50px;
  background-color: #630330;

  white-space: nowrap;
  padding: 1rem 2rem;
  color: #fff;

  font-size: 1.5rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d1bac2;
  }
`;
