import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    imageUrl: "",
    status: "",
    subcategoryId: "",
    categoryId: "",
  });
  
  const navigate=useNavigate();

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
        alert("product create successfully");
        navigate("/product")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={addNewProduct}>
        <label htmlFor="newSubcategory">Category name</label>
        <input
          type="text"
          name="name"
          placeholder="enter Product name"
          value={product.name}
          onChange={handleChange}
        />
        <label htmlFor="imgage">Peste imageUrl</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="put your image url"
          value={product.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          placeholder="give status"
          value={product.status}
          onChange={handleChange}
        />
        <label htmlFor="subcategoryId">SubCategoryId</label>
        <input
          type="text"
          name="subcategoryId"
          placeholder="Enter subcategoryId"
          value={product.subcategoryId}
          onChange={handleChange}
        />
        <label htmlFor="categoryId">CategoryId</label>
        <input
          type="text"
          name="categoryId"
          placeholder="Enter categoryId"
          value={product.categoryId}
          onChange={handleChange}
        />
        <button className="bg-green-600 p-1 rounded-md">Add Category</button>
      </form>
    </div>
  );
};

export default AddProduct;
