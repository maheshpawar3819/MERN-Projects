import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthPorvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const storedtokenInls = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log('is login ',isLoggedIn)
  // takcling the lougout functionlality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ storedtokenInls, isLoggedIn, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

//create custum hook
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  //check provide was provided to your paraent component or not
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
