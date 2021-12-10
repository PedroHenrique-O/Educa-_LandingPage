import { Home } from "./pages/Home";

import { GlobalStyle } from "./styles/Global";
import { BrowserRouter } from "react-router-dom";
// import { Routers } from "./Routes";

function App() {
  return (
    <h1>
      <BrowserRouter>
        <Home />
        <GlobalStyle />
      </BrowserRouter>
    </h1>
  );
}

export default App;
