import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

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
                <NavLink to={"/admin/contacts"}>
                  <IoMdContacts />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to={"/admin/services"}>
                  <FaRegListAlt /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"}>
                  <FaHome />
                  Home
                </NavLink>
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
