import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const EditSubCategory = () => {
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    status: "",
    categoryId: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  //get subcategory data
  const getSubCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/subcategory/subcategory/${params.id}`
      );
      const data = response?.data?.get;

      setData({
        name: data.name,
        imageUrl: data.imageUrl,
        status: data.status,
        categoryId: data.categoryId,
      });
      if (response.status >= 200) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubCategory();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: name === "categoryId" ? Number(value) : value, // Convert categoryId to number
    });
  };

  //to update info
  const updateSubCategory = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { name, imageUrl, status, categoryId } = data;
    try {
      const response = await axios.put(
        `http://localhost:8080/api/subcategory/update/${params.id}`,
        { name, imageUrl, status, categoryId }
      );
      if (response.status >= 200) {
        toast.success(`subCategory update successfully`);
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
        <p className="text-2xl ml-5 font-semibold">Edit SubCategory</p>
      </div>
      <div>
        <form action="" onSubmit={updateSubCategory}>
          <label
            htmlFor="newCategory"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            SubCategory Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter subcategory name (e.g., Electronics)"
            value={data.name}
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
            placeholder="Enter a valid image URL (e.g., https://example.com/image.jpg)"
            value={data.imageUrl}
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
            value={data.status}
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
          <label
            htmlFor="categoryId"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            CategoryId
          </label>
          <input
            type="text"
            name="categoryId"
            placeholder="Enter category ID (numeric)"
            value={data.categoryId}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <button className="bg-[#662671] hover:bg-[#823c8f] text-white px-3 tracking-wider p-2 rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSubCategory;
