import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import useGetCategory from "../Hooks/Category/useGetCategory";
import useSubCategories from "../Hooks/Subcategory/useSubCategories";
import { useSelector } from "react-redux";

const AddProduct = () => {
  //api call for sub category and category
  useGetCategory();
  useSubCategories();

  //get Categories and SubCategories from Redux Stroe
  const Category = useSelector((store) => store?.category?.category);
  const SubCategory = useSelector((store) => store?.category?.subCategory);
  console.log(Category);
  console.log(SubCategory);

  const [product, setProduct] = useState({
    name: "",
    imageUrl: "",
    status: "",
    subcategoryId: "",
    categoryId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({
      ...product,
      [name]:
        name === "categoryId" || name === "subcategoryId"
          ? Number(value)
          : value,
    });
  };

  //api call to add new product
  const addNewProduct = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { name, imageUrl, status, subcategoryId, categoryId } = product;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/product/create`,
        { name, imageUrl, status, subcategoryId, categoryId }
      );

      if (response.status >= 200) {
        toast.success(response?.data?.message);
        navigate("/product");
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
        <Link to={"/product"}>
          <IoMdArrowRoundBack className="size-8" />
        </Link>
        <p className="text-2xl ml-5 font-semibold">Add Product</p>
      </div>
      <div className="mt-2">
        <form action="" onSubmit={addNewProduct}>
          <label
            htmlFor="newSubcategory"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name (e.g., Product Name)"
            value={product.name}
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
            value={product.imageUrl}
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
            value={product.status}
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
            Category
          </label>
          <select
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          >
            <option value="" disabled className="text-gray-400">
              Select a Category
            </option>
            {Category.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="text-gray-700 bg-white hover:bg-blue-100"
              >
                {category.name}
              </option>
            ))}
          </select>
          <label
            htmlFor="subcategoryId"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            SubCategory
          </label>
          <select
            name="subcategoryId"
            value={product.subcategoryId}
            onChange={handleChange}
            className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          >
            <option value="" disabled className="text-gray-400">
              Select a SubCategory
            </option>
            {SubCategory.map((subCategory) => (
              <option
                key={subCategory.id}
                value={subCategory.id}
                className="text-gray-700 bg-white hover:bg-blue-100"
              >
                {subCategory.name}
              </option>
            ))}
          </select>
          <button className="bg-[#662671] hover:bg-[#823c8f] text-white  p-2 rounded-md">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
