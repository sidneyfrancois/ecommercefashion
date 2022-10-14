import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function LoginContextProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userToken, setUserToken] = useState("");

  function setUserLogin(login) {
    setUserEmail(login.email);
    setUserToken(login.token);
  }

  return (
    <>
      <LoginContext.Provider value={{ userEmail, userToken, setUserLogin }}>
        {children}
      </LoginContext.Provider>
    </>
  );
}
