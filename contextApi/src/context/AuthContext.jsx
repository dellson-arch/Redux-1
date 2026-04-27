import { createContext, useContext, useState } from "react";

let Auth = createContext();

export let AuthProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState([]);
  const [loginUser, setloginUser] = useState([]);
  return (
    <Auth.Provider
      value={{ registerUser, loginUser, setRegisterUser, setloginUser }}
    >
      {children}
    </Auth.Provider>
  );
};

export let useAuth = () => useContext(Auth);
