import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthPorvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  // for wait until user data comming 
  const [isLoading,setIsLoading]=useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken=`Bearer ${token}`;

  const storedtokenInls = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  // console.log("is login ", isLoggedIn);
  // takcling the lougout functionlality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication -to get the logedin user data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        // console.log("userdata", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      }else{
        setIsLoading(false);
      }

    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  // to fetch services data from the database;

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storedtokenInls, isLoggedIn, LogoutUser, user ,services ,authorizationToken ,isLoading}}
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
