import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthPorvider = ({ children }) => {
  const storedtokenInls = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={{ storedtokenInls }}>
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
