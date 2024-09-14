import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router for navigation

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex  items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-200 transition duration-300">
          Feynman Board
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
