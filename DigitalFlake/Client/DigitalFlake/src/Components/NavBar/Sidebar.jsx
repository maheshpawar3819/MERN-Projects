import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineProduct } from "react-icons/ai";
import { TbCategoryMinus } from "react-icons/tb";
import { FaPlay } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-100 w-72 fixed p-4">
      <ul className="space-y-4 mt-2">
        <li className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="flex items-center space-x-2">
            <BiCategoryAlt className="text-xl" />
            <span className="text-xl">Cateogory</span>
          </div>
          <FaPlay className="text-sm" />
        </li>

        <li className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="flex items-center space-x-2">
            <TbCategoryMinus className="text-xl" />
            <span className="text-xl">SubCategories</span>
          </div>
          <FaPlay className="text-sm" />
        </li>

        <li className="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
          <div className="flex items-center space-x-2">
            <AiOutlineProduct className="text-xl" />
            <span className="text-xl">Products</span>
          </div>
          <FaPlay className="text-sm" />
        </li>
      </ul>
    </div>
  
  );
};

export default Sidebar;
