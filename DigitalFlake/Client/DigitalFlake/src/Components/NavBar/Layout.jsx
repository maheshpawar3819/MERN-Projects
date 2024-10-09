import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Sidebar/>
      <Outlet /> {/* this will render all child routes  */}
    </div>
  );
};

export default Layout;
