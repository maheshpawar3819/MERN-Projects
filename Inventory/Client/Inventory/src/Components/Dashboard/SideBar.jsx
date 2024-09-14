import React from "react";
import {NavLink} from "react-router-dom"

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-lg font-bold mb-6">Inventory Management</h2>
      <nav>
        <NavLink
          to="/dashboard"
          className="block py-2 px-4 hover:bg-gray-700 rounded"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/products"
          className="block py-2 px-4 hover:bg-gray-700 rounded"
        >
          Products
        </NavLink>
        <NavLink
          to="/orders"
          className="block py-2 px-4 hover:bg-gray-700 rounded"
        >
          Orders
        </NavLink>
        <NavLink
          to="/suppliers"
          className="block py-2 px-4 hover:bg-gray-700 rounded"
        >
          Suppliers
        </NavLink>
        <NavLink
          to="/settings"
          className="block py-2 px-4 hover:bg-gray-700 rounded"
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
