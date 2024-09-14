import React from "react";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div>
      <section>
        <div
          className="relative h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/delivery-service-associate-examines-order-details-files_482257-88032.jpg?t=st=1726307593~exp=1726311193~hmac=f71685fdc17daa5c59c3bdbf560719c212aa66d4e6b1ecce8114c4d7cc499af0&w=1060')",
          }}
        >
          <div className="max-w-6xl mx-auto text-center absolute top-52 left-[25vw]">
            <h2 className="text-5xl font-bold mb-4">
              Manage Your Inventory Efficiently
            </h2>
            <p className="text-xl mb-8">
              Track your products, sales, and stock levels with ease.
            </p>
            <Link
              to={"/login"}
              className="bg-white text-blue-600 font-semibold py-2 px-6 rounded shadow hover:bg-gray-200 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
