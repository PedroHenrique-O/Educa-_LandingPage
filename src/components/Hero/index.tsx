import { Button } from "../ButtonScroll/styles";
import { Container } from "./styles";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero--bg">
        <div className="img--bg">
          <div className="text--container">
            <h1>Democratizando o acesso a educação</h1>

            <p>
              Confira nosso plano em fornecer educação de qualidade para todo o
              Brasil
            </p>

            <Button smooth={true} to="about">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
