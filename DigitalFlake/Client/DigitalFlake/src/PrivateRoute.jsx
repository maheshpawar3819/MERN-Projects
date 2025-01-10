import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isloggedIn = useSelector((store) => store.auth.isLoggedIn);
  return isloggedIn ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
