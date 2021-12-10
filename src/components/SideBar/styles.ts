import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { Link as LinkRouter } from "react-router-dom";

interface SideBarProps {
  isOpen: boolean;
}

export const Container = styled.aside<SideBarProps>`
  display: grid;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
  background: #eee;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "+100%")};
  z-index: 999;

  .SideBarWrapp {
    color: #000;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 80px);
      text-align: center;
      cursor: pointer;

      .link {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-decoration: none;
        list-style-type: none;
        transition: 0.2s ease-in-out;
        text-decoration: none;
        color: #000;
        cursor: pointer;
        &:hover {
          color: purple;
          transition: 0.2s ease-in-out;
        }
      }

      @media screen and (max-width: 768px) {
        grid-template-rows: repeat(6, 60px);
      }
    }
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: red;
  &:hover {
    opacity: 0.3;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const SideBtnBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background-color: #01b771;
  white-space: nowrap;
  padding: 16px 64px;
  color: #ddd;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const ContactButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  .link {
    display: flex;
    color: white;
    background: purple;
    justify-content: center;
    align-items: center;
    width: 9.5rem;
    padding: 0.4rem;
    font-weight: 700;

    border-radius: 0.75rem;
    transition: all 0.1s ease;

    &:hover {
      border: 2.6px solid #ccc;
      cursor: pointer;
      color: #fff;
    }
  }
`;
