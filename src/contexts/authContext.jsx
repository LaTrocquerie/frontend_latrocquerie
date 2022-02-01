import axios from "axios";
import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [token, setToken] = useState();

  const loginUser = (mail, password) => {
    return axios
      .post(`${process.env.REACT_APP_BACK_END_URL}api/auth/login`, {
        email: mail,
        password,
      })
      .then((res) => {
        setEmail(res.data.email);
        setToken(res.data.token);
        return "/";
      })
      .catch(() => {
        setEmail("");
        return "Identifiants erronés";
      });
  };

  return (
    <AuthContext.Provider value={{ loginUser, email, token }}>
      {children}
    </AuthContext.Provider>
  );
};
