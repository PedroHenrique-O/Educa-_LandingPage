import { Link } from "react-scroll";
import { Container } from "./styles";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
export function Footer() {
  return (
    <Container>
      <div className="linkWrapper">
        <Link className="link" smooth={true} to="about">
          O que somos
        </Link>
        <Link className="link" smooth={true} to="proposal">
          Proposta
        </Link>
        <Link className="link" smooth={true} to="services">
          Serviços
        </Link>
      </div>
      <div className="socialIcons">
        <TiSocialFacebookCircular size="35" color="white" />
        <TiSocialInstagram size="35" color="white" />
        <TiSocialTwitter size="35" color="white" />
      </div>
      <h1> Proudly made by Pedro 💜 </h1>
    </Container>
  );
}
