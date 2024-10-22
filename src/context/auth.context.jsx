import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  token: undefined,
  setToken: () => {},
});

export const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth, token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
