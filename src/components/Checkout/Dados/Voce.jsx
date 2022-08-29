import { NavLink } from "react-router-dom";
import "./Voce.css";

export function Voce() {
  return (
    <div className="container-voce">
      <div className="voce-painel">
        <h1>Você</h1>
      </div>
      <div className="dados-user">
        <p>fashion@gmail.com</p>

        <NavLink className="link-sair" to="/" title="Home">
          sair e trocar
        </NavLink>
      </div>
    </div>
  );
}
