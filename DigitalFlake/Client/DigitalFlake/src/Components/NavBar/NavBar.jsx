import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[#662671] ">
      <div className="flex justify-between ">
        <p className="text-white font-bold text-4xl p-5 tracking-wide">
          Digital<span className="font-thin">Flake</span>
        </p>
        <button className="text-white font-bold text-2xl p-4 tracking-wide mr-10">
          Mahesh
        </button>
      </div>
    </div>
  );
};

export default NavBar;
