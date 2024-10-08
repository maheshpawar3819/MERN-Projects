import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">My logo</a>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>Service</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink
                    to={"/logout"}
                    onClick={() => window.location.reload()}
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"}>login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
