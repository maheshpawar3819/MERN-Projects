import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  //api call
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/products`
      );
      console.log(response?.data);
      setData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  //api call to  delete product

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/product/delete/${id}`
      );
      if (response.status >= 200) {
        alert("product delete successfully");
        getAllProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-72 mt-20 p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-[#662671] hover:bg-[#823c8f] text-white py-2 px-5 rounded-md">
          <Link to={"/product/add"}>Add New</Link>
        </button>
        <p className="text-3xl font-bold font-mono">Product</p>
        <input
          type="text"
          placeholder="Search category..."
          className="p-2 border rounded-md w-1/3"
        />
      </div>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        className="w-full bg-white shadow-md rounded-lg overflow-hidden"
      >
        <thead className="bg-yellow-200 text-left">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Product Name</th>
            <th className="p-3">Image</th>
            <th className="p-3">Status</th>
            <th className="p-3">SubCategory</th>
            <th className="p-3">Category</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((ele) => {
              const { id, imageUrl, name, status } = ele;
              return (
                <tr key={id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{id}</td>
                  <td className="p-3">{name}</td>
                  <td>
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
                  <td className="p-3">{ele?.subcategory?.name}</td>
                  <td className="p-3">{ele?.category?.name}</td>
                  <td className="p-3 flex space-x-2 mt-2">
                    <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                      <Link to={`/product/${id}`}> Edit</Link>
                    </button>
                    <button
                      className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      onClick={() => deleteProduct(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">
                <h1>Loading...</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
