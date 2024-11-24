import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("user : ", user);
  const login = (data) => {
    setLoggedIn(true);
    setUser(data);
  };
  console.log("user : ", user);
  console.log("loggedIn : ", loggedIn);

  const value = {
    user,
    setUser,
    login,
    loggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
