import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useLogin } from "../contexts/LoginContext";

const origin = "http://localhost:3333";
const login = {};

export function Login() {
  const [useEmail, setEmail] = useState("");
  const [usePassword, setPassword] = useState("");

  const { setUserLogin } = useLogin();

  function authenticateUser() {
    axios
      .post(`${origin}/auth`, {
        email: useEmail,
        password: usePassword,
      })
      .then((response) => {
        console.log(response);
        login.email = response.data.user.email;
        login.token = response.data.token;

        setUserLogin(login);
      })
      .catch((err) => {
        console.log("Erro: " + err);
      });
  }

  return (
    <div className="loginForm">
      <form method="post">
        <div className="box">
          <h1>Login</h1>

          <input
            type="email"
            className="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="email"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="#">
            <div className="btn" onClick={authenticateUser}>
              Logar
            </div>
          </a>

          <a href="#">
            <div id="btn2">Registrar</div>
          </a>
        </div>
      </form>
    </div>
  );
}
