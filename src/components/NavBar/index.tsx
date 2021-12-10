import { ContactButton, NavContainer } from "./styles";
import logosvg from "../../assets/educa+2-removebg-preview.png";
import { animateScroll, Link } from "react-scroll";
import { AiOutlineBars } from "react-icons/ai";

interface HeaderProps {
  toggle: () => void;
}

export function NavBar({ toggle }: HeaderProps) {
  const ScrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <NavContainer>
      <div className="NavWrapper">
        <Link to="/home">
          <div className="LogoWrapper" onClick={ScrollToTop}>
            <img src={logosvg} alt="logo" />
          </div>
        </Link>

        <div className="MobileBar" onClick={toggle}>
          <AiOutlineBars />
        </div>

        <div className="NavMenu">
          <Link className="link about" smooth={true} to="about">
            O que somos
          </Link>

          <Link className="link mission" smooth={true} to="proposal">
            Proposta
          </Link>

          <Link className="link serve" smooth={true} to="services">
            Serviços
          </Link>
        </div>

        <ContactButton>
          <Link to="#">Contato</Link>
        </ContactButton>
      </div>
    </NavContainer>
  );
}
