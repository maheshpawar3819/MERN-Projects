import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      console.log(response?.data?.getP);
      const data = response?.data?.getP;
      setUpdate({
        name: data?.name,
        imageUrl: data?.imageUrl,
        status: data?.status,
        subcategoryId: data?.subcategoryId,
        categoryId: data?.categoryId,
      });
      if (response.status >= 200) {
        console.log(response);
      }
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
        alert("product update successfully");
        navigate("/product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={updateProduct}>
        <label htmlFor="newCategory">Category name</label>
        <input
          type="text"
          name="name"
          placeholder="enter category name"
          value={update.name}
          onChange={handleChange}
        />
        <label htmlFor="imgage">Peste imageUrl</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="put your image url"
          value={update.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          placeholder="give status"
          value={update.status}
          onChange={handleChange}
        />
        <label htmlFor="status">SubCategory Id</label>
        <input
          type="text"
          name="subcategoryId"
          placeholder="subcategory id"
          value={update.subcategoryId}
          onChange={handleChange}
        />
        <label htmlFor="categoryId">CategoryId</label>
        <input
          type="text"
          name="categoryId"
          placeholder="Enter categoryId"
          value={update.categoryId}
          onChange={handleChange}
        />
        <button className="bg-green-600 p-1 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
