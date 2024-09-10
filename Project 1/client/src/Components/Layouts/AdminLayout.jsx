import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const AdminLayout = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to={"/admin/users"}>
                  <FaUser /> Users
                </NavLink>
              </li>
              <li>
                <FaMessage />
                <NavLink to={"/admin/contacts"}>Contacts</NavLink>
              </li>
              <li>
                <NavLink to={"/admin/services"}>
                  {" "}
                  <FaRegListAlt /> Services
                </NavLink>
              </li>
              <li>
                <FaHome />
                <NavLink to={"/"}>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
