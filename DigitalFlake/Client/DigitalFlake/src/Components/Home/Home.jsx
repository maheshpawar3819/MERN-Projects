import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  // Get all categories from redux store
  const categories = useSelector((categories) => {
    return categories.category.category;
  });
  const subCategories = useSelector((subCategories) => {
    return subCategories.category.subCategory;
  });
  const products = useSelector((products) => {
    return products.category.product;
  });

  return (
    <div className="ml-72 mt-20 p-6">
      <h1 className="text-4xl font-bold text-purple-900 mb-6">
        Welcome to DigitalFlake Dashboard
      </h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category Card */}
        <div className="bg-yellow-200 shadow-2xl rounded-lg p-6 transform hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Categories</h2>
          <p className="text-gray-700 text-lg mb-6">
            Manage all your product categories here.
          </p>
          <Link
            to="/category"
            className="bg-purple-600 text-white py-2 px-4 rounded-md transform hover:translate-y-1 transition duration-300"
          >
            Go to Categories
          </Link>
        </div>

        {/* Subcategories Card */}
        <div className="bg-blue-200 shadow-2xl rounded-lg p-6 transform hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Subcategories</h2>
          <p className="text-gray-700 text-lg mb-6">
            Add and manage subcategories with ease.
          </p>
          <Link
            to="/subcategory"
            className="bg-blue-600 text-white py-2 px-4 rounded-md transform hover:translate-y-1 transition duration-300"
          >
            Go to Subcategories
          </Link>
        </div>

        {/* Products Card */}
        <div className="bg-green-200 shadow-2xl rounded-lg p-6 transform hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Products</h2>
          <p className="text-gray-700 text-lg mb-6">
            View and manage all your products.
          </p>
          <Link
            to="/product"
            className="bg-green-600 text-white py-2 px-4 rounded-md transform hover:translate-y-1 transition duration-300"
          >
            Go to Products
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-purple-900 mb-4">
          Quick Stats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Categories */}
          <div className="bg-purple-100 p-4 rounded-md shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
            <p className="text-gray-600 text-lg">Total Categories</p>
            <h3 className="text-3xl font-bold text-purple-900">
              {categories.length}
            </h3>
          </div>
          {/* Total Subcategories */}
          <div className="bg-blue-100 p-4 rounded-md shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
            <p className="text-gray-600 text-lg">Total Subcategories</p>
            <h3 className="text-3xl font-bold text-blue-900">
              {subCategories.length}
            </h3>
          </div>
          {/* Total Products */}
          <div className="bg-green-100 p-4 rounded-md shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out">
            <p className="text-gray-600 text-lg">Total Products</p>
            <h3 className="text-3xl font-bold text-green-900">
              {products.length}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
