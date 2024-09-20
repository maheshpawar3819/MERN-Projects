import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p className="text-center text-3xl">All Users</p>
      <div className="flex justify-center mt-4">
        <Link to={"/create"}>
          <button className="p-3 bg-blue-400 rounded-md hover:bg-blue-500 ">
            Create User
          </button>
        </Link>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
