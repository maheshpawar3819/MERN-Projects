import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const AddSubCategory = () => {
  const [subCategory, setSubCategory] = useState({
    name: "",
    imageUrl: "",
    status: "",
    categoryId: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSubCategory({
      ...subCategory,
      [name]: name === "categoryId" ? Number(value) : value, // Convert categoryId to number
    });
  };

  const AddSubCategory = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { name, imageUrl, status, categoryId } = subCategory;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/subcategory/create`,
        { name, imageUrl, status, categoryId }
      );

      console.log(response);
      if (response.status >= 200) {
        alert("successfully create subcategory");
        navigate("/subcategory");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-72 mt-20 p-4 shadow-md rounded-md m-2 h-[85vh]">
      <div className="flex items-center">
        <Link to={"/subcategory"}>
          <IoMdArrowRoundBack className="size-8" />
        </Link>
        <p className="text-2xl ml-5 font-semibold">Add SubCategory</p>
      </div>
      <div className="mt-2">
        <form action="" onSubmit={AddSubCategory}>
          <label
            htmlFor="newSubcategory"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            Category name
          </label>
          <input
            type="text"
            name="name"
            placeholder="enter category name"
            value={subCategory.name}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <label
            htmlFor="imgage"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            Peste imageUrl
          </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="put your image url"
            value={subCategory.imageUrl}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <label
            htmlFor="status"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            Status
          </label>
          <input
            type="text"
            name="status"
            placeholder="give status"
            value={subCategory.status}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <label
            htmlFor="categoryId"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            CategoryId
          </label>
          <input
            type="text"
            name="categoryId"
            placeholder="Enter categoryId"
            value={subCategory.categoryId}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <button className="bg-[#662671] hover:bg-[#823c8f] text-white  p-2 rounded-md">
            Add SubCategory
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategory;
