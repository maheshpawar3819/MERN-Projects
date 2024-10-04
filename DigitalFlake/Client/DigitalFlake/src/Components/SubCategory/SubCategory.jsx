import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [data, setData] = useState([]);
  //apicall
  const getSubCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/subcategory/subcategories`
      );
      console.log(response?.data?.subCategoreis);
      setData(response?.data?.subCategoreis);
    } catch (error) {
      console.log(error);
    }
  };

  //to delete subcategory
  const deleteSubcategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/subcategory/delete/${id}`
      );
      if (response.status >= 200) {
        alert("delete subcategroy");
        getSubCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubCategories();
  }, []);

  return (
    <>
      <button className="bg-slate-500 p-1 rounded-md px-5">
        <Link to={"/subcategory/add"}>Add</Link>
      </button>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Image</th>
            <th>Status</th>
            <th>Category Name</th>
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
                  <td>{ele?.category?.name}</td>
                  <td>
                    <button className="p-1 bg-green-500 px-2 rounded-md text-white">
                      <Link to={`/subcategory/${id}`}> Edit</Link>
                    </button>
                    <button
                      className="p-1 bg-red-500 px-2 rounded-md text-white"
                      onClick={() => deleteSubcategory(id)}
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
    </>
  );
};

export default SubCategory;
