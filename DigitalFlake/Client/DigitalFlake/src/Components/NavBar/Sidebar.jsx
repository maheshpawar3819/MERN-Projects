import React from "react";
import { BiCategoryAlt, BiHomeAlt } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { TbCategoryMinus } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-100 w-72 fixed top-0 left-0 p-4 ">
      <ul className="space-y-4 mt-20">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-[#662671] bg-red-500" : ""
          }
        >
          <li className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <div className="flex items-center space-x-2">
              <BiHomeAlt className="text-xl" />
              <span className="text-xl">Home</span>
            </div>
            <FaPlay className="text-sm" />
          </li>
        </NavLink>
        <hr />
        <NavLink
          to="/category"
          className={({ isActive }) =>
            isActive ? "text-[#662671] bg-red-500" : ""
          }
        >
          <li className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer mt-3">
            <div className="flex items-center space-x-2">
              <BiCategoryAlt className="text-xl" />
              <span className="text-xl">Category</span>
            </div>
            <FaPlay className="text-sm" />
          </li>
        </NavLink>
        <hr />
        <NavLink
          to={"/subcategory"}
          className={({ isActive }) =>
            isActive ? "text-[#662671] bg-red-500" : ""
          }
        >
          <li className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer mt-3">
            <div className="flex items-center space-x-2">
              <TbCategoryMinus className="text-xl" />
              <span className="text-xl">SubCategories</span>
            </div>
            <FaPlay className="text-sm" />
          </li>
        </NavLink>
        <hr />
        <NavLink
          to={"/product"}
          className={({ isActive }) =>
            isActive ? "text-[#662671] bg-red-500" : ""
          }
        >
          <li className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer mt-3">
            <div className="flex items-center space-x-2">
              <AiOutlineProduct className="text-xl" />
              <span className="text-xl">Products</span>
            </div>
            <FaPlay className="text-sm" />
          </li>
        </NavLink>
        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
