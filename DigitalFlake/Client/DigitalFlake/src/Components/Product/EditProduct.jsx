import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

const EditProduct = () => {
  const [update, setUpdate] = useState({
    name: "",
    imageUrl: "",
    status: "",
    subcategoryId: "",
    categoryId: "",
  });

  useEffect(() => {
    getProduct();
  }, []);

  const navigate = useNavigate();
  const params = useParams();
  //const fetch product by id
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/product/${params.id}`
      );

      const data = response?.data?.getP;
      setUpdate({
        name: data?.name,
        imageUrl: data?.imageUrl,
        status: data?.status,
        subcategoryId: data?.subcategoryId,
        categoryId: data?.categoryId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUpdate({
      ...update,
      [name]:
        name === "subcategoryId" || name === "categoryId"
          ? Number(value)
          : value,
    });
  };

  //api call for update product

  const updateProduct = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { name, imageUrl, status, subcategoryId, categoryId } = update;
    try {
      const response = await axios.put(
        `http://localhost:8080/api/product/update/${params.id}`,
        {
          name,
          imageUrl,
          status,
          subcategoryId,
          categoryId,
        }
      );

      if (response.status >= 200) {
        if (response.status >= 200) {
          toast.success(response?.data?.message);
        }
        navigate("/product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-72 mt-20 p-4 shadow-md rounded-md m-2 h-[85vh]">
      <div className="flex items-center">
        <Link to={"/product"}>
          <IoMdArrowRoundBack className="size-8" />
        </Link>
        <p className="text-2xl ml-5 font-semibold">Edit Product</p>
      </div>
      <form action="" onSubmit={updateProduct}>
        <label
          htmlFor="newCategory"
          className="text-xl font-semibold text-gray-700 mb-2"
        >
          Product Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter product name (e.g., Product Name)"
          value={update.name}
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
          value={update.imageUrl}
          onChange={handleChange}
          className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
        />
        <label className="text-xl font-semibold text-gray-700 mb-2">
          Status
        </label>
        <select
          name="status"
          value={update.status}
          onChange={handleChange}
          className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
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
          placeholder="Enter Category ID (e.g., 1, 2, 3)"
          value={update.categoryId}
          onChange={handleChange}
          className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
        />
        <label
          htmlFor="status"
          className="text-xl font-semibold text-gray-700 mb-2"
        >
          SubCategory Id
        </label>
        <input
          type="text"
          name="subcategoryId"
          placeholder="Enter Subcategory ID (e.g., 1, 2, 3)"
          value={update.subcategoryId}
          onChange={handleChange}
          className="w-full px-4 mt-3 mb-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
        />

        <button className="bg-[#662671] hover:bg-[#823c8f] text-white px-3 tracking-wider p-2 rounded-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
