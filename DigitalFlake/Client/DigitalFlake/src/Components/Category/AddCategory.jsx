import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    imageUrl: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const addCategory = async (e) => {
    e.preventDefault();
    const { name, imageUrl, status } = category;
    try {
      const response = await axios.post(
        "http://localhost:8080/api/categories/categories",
        {
          name,
          imageUrl,
          status,
        }
      );
      console.log(response);
      if (response.status >= 200) {
        toast.success(response?.data?.message);
        navigate("/category");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div className="ml-72 mt-20 p-4 shadow-md rounded-md m-2 h-[85vh]">
      <div className="flex items-center">
        <Link to={"/category"}>
          <IoMdArrowRoundBack className="size-8" />
        </Link>
        <p className="text-2xl ml-5 font-semibold">Add Catogory</p>
      </div>
      <div className="mt-2">
        <form action="" onSubmit={addCategory}>
          <label
            htmlFor="newCategory"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            Category name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter a unique category name (e.g., Electronics)"
            value={category.name}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <label
            htmlFor="imgage"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            ImageUrl
          </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Paste a valid image URL (e.g., https://example.com/image.jpg)"
            value={category.imageUrl}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <label
            htmlFor="status"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            Status
          </label>
          <select
            name="status"
            value={category.status}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          >
            <option value="" disabled className="text-gray-400">
              Select Status
            </option>
            <option
              value="active"
              className="text-gray-700 bg-white hover:bg-blue-100"
            >
              Active
            </option>
            <option
              value="inactive"
              className="text-gray-700 bg-white hover:bg-blue-100"
            >
              Inactive
            </option>
          </select>
          <button className="bg-[#662671] hover:bg-[#823c8f] text-white  p-2 rounded-md">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
