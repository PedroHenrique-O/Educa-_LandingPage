import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #555;
  height: 8rem;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
  }

  h1 {
    font-size: 1rem;
    color: #fff;
    margin: 1rem;
  }
  .linkWrapper {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    .link {
      color: #fff;
      font-size: 1rem;
      font-weight: 500;

      &:hover {
        color: var(--mainpurple);
        transition: all 0.3 ease-in-out;
        cursor: pointer;
      }
    }
  }
  .socialIcons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`;
