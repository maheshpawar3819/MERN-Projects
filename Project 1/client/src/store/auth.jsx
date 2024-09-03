import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthPorvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const storedtokenInls = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("is login ", isLoggedIn);
  // takcling the lougout functionlality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication -to get the logedin user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        // console.log("userdata", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storedtokenInls, isLoggedIn, LogoutUser, user }}
    >
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
