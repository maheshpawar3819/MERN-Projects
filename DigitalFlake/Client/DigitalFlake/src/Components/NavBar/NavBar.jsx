import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[#662671] fixed w-full z-50 top-0 left-0">
      <div className="flex justify-between p-4">
        <p className="text-white font-bold text-4xl tracking-wide">
          Digital<span className="font-thin">Flake</span>
        </p>
        <button className="text-white font-bold text-2xl tracking-wide">
          Mahesh
        </button>
      </div>
    </div>
  );
};

export default NavBar;
