import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./Router";
import { LoginContextProvider } from "./contexts/LoginContext";

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
