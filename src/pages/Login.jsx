import "./Login.css";
import axios from "axios";
import { useEffect } from "react";

const origin = "http://localhost:3333";

export function Login() {
  useEffect(() => {
    axios
      .post(`${origin}/auth`, {
        email: "sidney@email.com",
        password: "123",
      })
      .then((response) => console.log(response))
      .catch((err) => {
        console.log("Erro: " + err);
      });
  });

  return (
    <div className="form">
      <div className="title">Bem Vindo!</div>
      <div className="subtitle">Crie sua conta</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="firstname" className="placeholder">
          First name
        </label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">
          Last name
        </label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">
          Email
        </label>
      </div>
      <button type="text" className="submit">
        Registrar
      </button>
    </div>
  );
}
