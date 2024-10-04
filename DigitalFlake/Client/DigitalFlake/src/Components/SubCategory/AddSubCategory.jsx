import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form action="" onSubmit={AddSubCategory}>
        <label htmlFor="newSubcategory">Category name</label>
        <input
          type="text"
          name="name"
          placeholder="enter category name"
          value={subCategory.name}
          onChange={handleChange}
        />
        <label htmlFor="imgage">Peste imageUrl</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="put your image url"
          value={subCategory.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          placeholder="give status"
          value={subCategory.status}
          onChange={handleChange}
        />
        <label htmlFor="categoryId">CategoryId</label>
        <input
          type="text"
          name="categoryId"
          placeholder="Enter categoryId"
          value={subCategory.categoryId}
          onChange={handleChange}
        />
        <button className="bg-green-600 p-1 rounded-md">Add Category</button>
      </form>
    </div>
  );
};

export default AddSubCategory;
