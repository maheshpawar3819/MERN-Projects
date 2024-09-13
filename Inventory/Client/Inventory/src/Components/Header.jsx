import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-300 p-3">
        <div className="flex justify-between px-5">
          <img
            src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-inventory-management-data-science-application-solid-solidglyph-m-oki-orlando.png"
            alt="external-inventory-management-data-science-application-solid-solidglyph-m-oki-orlando"
            className="w-10"
          />
          <h1 className=" text-3xl text-center tracking-widest font-semibold">
            S m a r t I n v e n t o r y
          </h1>
          <p className="self-center text-xl">Mahesh</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
