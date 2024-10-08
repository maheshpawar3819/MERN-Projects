import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* this will render all child routes  */}
    </div>
  );
};

export default Layout;
