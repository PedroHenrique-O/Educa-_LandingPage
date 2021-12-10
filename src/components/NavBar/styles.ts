import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  background: #fff;
  position: fixed;
  z-index: 10;

  .NavWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5rem;

    z-index: 1;
    width: 100%;
    height: 100%;
    .MobileBar {
      display: none;

      @media screen and (max-width: 768px) {
        padding-top: 1rem;
        padding-right: 3rem;
        display: block;
        position: absolute;
        top: 0;
        right: 0;

        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
        &:hover {
          color: #f1a5;
        }
      }
    }

    .LogoWrapper {
      display: flex;
      justify-content: flex-start;
      cursor: pointer;
      align-items: center;
      max-width: 9rem;
      min-width: 8rem;

      @media (max-width: 768px) {
        margin-left: -1rem;
      }

      img {
        width: 100%;
      }
    }

    .NavMenu {
      display: flex;
      align-items: center;
      list-style: none;
      text-align: center;
      gap: 3rem;
      font-weight: 700;
      font-size: 1.1rem;
      font-weight: uppercase;
      .link {
        color: #000;
        font-weight: bold;
        &:hover {
          color: #a1a;
          transition: all 0.2s ease;
          cursor: pointer;

          font-size: 1.2rem;
        }
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const ContactButton = styled.div`
  display: flex;
  color: white;
  background: purple;
  justify-content: center;
  width: 9.5rem;
  padding: 0.4rem;
  font-weight: 700;
  font-size: 1.1rem;

  border-radius: 0.75rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transition: all 0.2s ease;
    background: #dda0dd;
    cursor: pointer;
  }
`;
