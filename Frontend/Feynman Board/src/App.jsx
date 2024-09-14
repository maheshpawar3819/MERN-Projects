import React from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import AddTopic from "./Component/AddTopic";
import Dashboard from "./Component/Dashboard";

const App = () => {
  return (
    <div>
      <Outlet />
      {/* <AddTopic /> */}
      {/* <Dashboard/> */}
    </div>
  );
};

export default App;
