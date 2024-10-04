import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        alert("success");
        navigate("/category");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={addCategory}>
        <label htmlFor="newCategory">Category name</label>
        <input
          type="text"
          name="name"
          placeholder="enter category name"
          value={category.name}
          onChange={handleChange}
        />
        <label htmlFor="imgage">Peste imageUrl</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="put your image url"
          value={category.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          placeholder="give status"
          value={category.status}
          onChange={handleChange}
        />
        <button className="bg-green-600 p-1 rounded-md">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
