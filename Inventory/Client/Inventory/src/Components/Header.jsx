import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className="bg-[#C4DAD2] p-3">
        <div className="flex justify-between px-5">
          <img
            src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-inventory-management-data-science-application-solid-solidglyph-m-oki-orlando.png"
            alt="external-inventory-management-data-science-application-solid-solidglyph-m-oki-orlando"
            className="w-12 "
          />
          <h1 className="text-[#16423C] text-3xl text-center tracking-widest font-semibold ml-40 pt-2">
            S m a r t I n v e n t o r y
          </h1>
          <div className="flex">
            <p className="self-center text-xl text-[#379777] px-5">Mahesh</p>
            <ul className="flex justify-center">
              <li className="self-center p-3 text-[#16423C] text-lg cursor-pointer">
                <Link to={"/"}><IoHomeOutline/></Link>
              </li>
              <li className="self-center p-3 text-[#16423C] text-lg cursor-pointer">
                <Link to={"/login"}><RiLoginBoxLine className="inline-block mr-1"/>Login</Link>
              </li>
              <li className="self-center p-3 text-[#16423C] text-lg cursor-pointer">
                <Link to={"/register"}><FaSignInAlt className="inline-block mr-1"/>Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
