import axios from "axios";
import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [token, setToken] = useState();

  /**
   * Mise en place du user après login
   * @param {string} mail
   * @param {string} password
   * @returns {string} token
   */
  const loginUser = (mail, password) => {
    return axios
      .post(`${process.env.REACT_APP_BACK_END_URL}api/auth/login`, {
        email: mail,
        password,
      })
      .then((res) => {
        setEmail(res.data.email);
        setToken(res.data.token);
        return res.data.token;
      })
      .catch(() => {
        setEmail("");
        return "Identifiants erronés";
      });
  };

  /**
   * Mémorisation du user en contect
   * @param {*} cookie
   */
  const setAdminProfil = (cookie) => {
    const key = cookie[0].split("=");
    setToken(key[1]);
  };

  return (
    <AuthContext.Provider value={{ loginUser, email, token, setAdminProfil }}>
      {children}
    </AuthContext.Provider>
  );
};
