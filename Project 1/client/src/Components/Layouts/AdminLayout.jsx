import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const AdminLayout = () => {
  const navigate = useNavigate();
  //get user from store to check the user is admin or not
  const { user, isLoading } = useAuth();
  // console.log(user);

  //check is loading state
  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  if (!user.isAdmin) {
    navigate("/");
    return toast.error(`Access Denied user not An Admin`);
  }

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
