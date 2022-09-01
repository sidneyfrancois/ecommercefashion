import { NavLink, Outlet } from "react-router-dom";
import mainLogo from "../assets/logo-at-2.png";
import carrinhoLogo from "../assets/sacola.png";
import "./DefaultLayout.css";
import { useCart } from "../contexts/CartContext";

export function DefaultLayout() {
  const { qtdItems } = useCart();

  return (
    <>
      <header>
        <div className="container">
          <div className="menu">
            <nav>
              <NavLink className="option" to="/">
                <img src={mainLogo} className="logo" />
              </NavLink>
              <NavLink className="option" to="/" title="Home">
                Mermaid
              </NavLink>
              <NavLink className="option" to="/Checkout" title="Checkout">
                Checkout
              </NavLink>
              <NavLink className="option" to="/login" title="Sobre">
                Login
              </NavLink>
              <NavLink to="/checkout">
                <div className="sacola">
                  <img className="logo-sacola" src={carrinhoLogo} />
                  <label>{qtdItems}</label>
                </div>
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
