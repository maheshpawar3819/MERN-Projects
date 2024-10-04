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
  return (
    <div>
      <button className="bg-slate-500 p-1 rounded-md px-5">
        <Link to={"/category/add"}>Add</Link>
      </button>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((ele) => {
              const { id, imageUrl, name, status } = ele;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>
                    <img
                      src={imageUrl}
                      alt={name}
                      width="50"
                      height="50"
                      className="rounded-lg"
                    />
                  </td>
                  <td>{status}</td>
                  <td>
                    <button className="p-1 bg-green-500 px-2 rounded-md text-white">
                      <Link to={`/category/${id}`}> Edit</Link>
                    </button>
                    <button
                      className="p-1 bg-red-500 px-2 rounded-md text-white"
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
