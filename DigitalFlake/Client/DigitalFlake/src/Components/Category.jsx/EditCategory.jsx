import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const EditCategory = () => {
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    status: "",
  });
  const params = useParams();
  const naivgate = useNavigate();

  //api call
  const getCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/categories/category/${params.id}`
      );
      const data = response?.data?.category;
      console.log(data);
      setData({
        name: data?.name,
        imageUrl: data?.imageUrl,
        status: data?.status,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const updateCategory = async (e) => {
    e.preventDefault();
    //destructures
    const { name, imageUrl, status } = data;
    try {
      const response = await axios.put(
        `http://localhost:8080/api/categories/categories/${params.id}`,
        {
          name,
          imageUrl,
          status,
        }
      );
      console.log(response);
      if (response.statusText === "OK") {
        alert(response?.data?.message);
        naivgate("/category");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-72 mt-20 p-4 shadow-md rounded-md m-2 h-[85vh]">
      <div className="flex items-center">
        <Link to={"/category"}>
          <IoMdArrowRoundBack className="size-8" />
        </Link>
        <p className="text-2xl ml-5 font-semibold">Edit Catogory</p>
      </div>
      <div>
        <form action="" onSubmit={updateCategory}>
          <label
            htmlFor="newCategory"
            className="text-xl font-semibold text-gray-700 mb-2"
          >
            Category name
          </label>
          <input
            type="text"
            name="name"
            placeholder="enter category name"
            value={data.name}
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
          <input
            type="text"
            name="status"
            placeholder="give status"
            value={data.status}
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

export default EditCategory;
