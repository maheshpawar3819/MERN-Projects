import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector((store) => store?.auth?.user);
  const isLoggedIn = useSelector((store) => store?.auth?.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout handle
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-[#662671] fixed w-full z-50 top-0 left-0 px-8">
      <div className="flex justify-between p-4">
        <p className="text-white font-bold text-4xl tracking-wide">
          Digital<span className="font-thin">Flake</span>
        </p>
        <div className="flex gap-3">
          <p className="text-white font-bold text-2xl tracking-wide">
            {isLoggedIn ? user?.name : "Guest"}
          </p>
          <button
            className="bg-white text-[#662671] p-2 rounded-full hover:bg-red-700  hover:text-white transition duration-300 flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleLogout}
          >
            <IoMdLogOut className="text-xl" />
          </button>
          {isHovered && (
            <span className="absolute left-[96vw]  transform -translate-x-1/2 top-14 bg-gray-800 text-white text-sm py-1 px-2 rounded">
              Logout
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
