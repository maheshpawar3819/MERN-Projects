import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetCategory from "../Hooks/Category/useGetCategory";

const Category = () => {
  //get data from redux store
  const getdata = useSelector((store) => {
    return store?.category?.category;
  });
  console.log(getdata);
  //custom hook
  useGetCategory();

  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/categories/categories/${id}`
      );
      console.log(response);
      if (response.statusText === "OK") {
        alert("Category deleted successfully");
        getCategory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-72 mt-20 p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-[#662671] hover:bg-[#823c8f] text-white py-2 px-5 rounded-md">
          <Link to={"/category/add"}>Add New</Link>
        </button>
        <p className="text-3xl font-bold font-mono">Category</p>
        <input
          type="text"
          placeholder="Search category..."
          className="p-2 border rounded-md w-1/3"
        />
      </div>

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-yellow-200 text-left">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Category Name</th>
            <th className="p-3">Image</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {getdata.length > 0 ? (
            getdata.map((ele) => {
              const { id, imageUrl, name, status } = ele;
              return (
                <tr key={id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{id}</td>
                  <td className="p-3">{name}</td>
                  <td className="p-3">
                    <img
                      src={imageUrl}
                      alt={name}
                      width="50"
                      height="50"
                      className="rounded-lg"
                    />
                  </td>
                  <td
                    className={`p-3 ${
                      status === "active" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status}
                  </td>
                  <td className="p-3 flex space-x-2 mt-2">
                    <Link to={`/category/${id}`}>
                      <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      onClick={() => deleteCategory(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" className="p-3 text-center">
                <h1>Loading...</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
