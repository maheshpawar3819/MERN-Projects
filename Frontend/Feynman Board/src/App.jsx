import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import AddTopic from "./Component/AddTopic";
import Dashboard from "./Component/Dashboard";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default App;
