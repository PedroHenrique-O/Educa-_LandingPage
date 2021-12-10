import { CloseIcon, Icon, Container, ContactButton } from "./styles";
import { Link as LinkScroll } from "react-scroll";

// import { Link } from "react-router-dom";
interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

export function SideBar({ isOpen, toggle }: SideBarProps) {
  console.log("isOpen", isOpen);
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <div className="SideBarWrapp">
        <ul>
          <LinkScroll
            onClick={toggle}
            className="link"
            smooth={true}
            to="about"
          >
            O que somos
          </LinkScroll>

          <LinkScroll
            onClick={toggle}
            className="link"
            smooth={true}
            to="proposal"
          >
            Proposta
          </LinkScroll>

          <LinkScroll
            onClick={toggle}
            className="link"
            smooth={true}
            to="services"
          >
            Serviços
          </LinkScroll>

          <ContactButton>
            <LinkScroll onClick={toggle} className="link" to="/contact">
              Contato
            </LinkScroll>
          </ContactButton>
        </ul>
      </div>
    </Container>
  );
}
