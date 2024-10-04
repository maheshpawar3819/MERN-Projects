import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const EditSubCategory = () => {
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    status: "",
    categoryId: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  //get subcategory data
  const getSubCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/subcategory/subcategory/${params.id}`
      );
      const data = response?.data?.get;

      setData({
        name: data.name,
        imageUrl: data.imageUrl,
        status: data.status,
        categoryId: data.categoryId,
      });
      if (response.status >= 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubCategory();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: name === "categoryId" ? Number(value) : value, // Convert categoryId to number
    });
  };

  //to update info
  const updateSubCategory = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { name, imageUrl, status, categoryId } = data;
    try {
      const response = await axios.put(
        `http://localhost:8080/api/subcategory/update/${params.id}`,
        { name, imageUrl, status, categoryId }
      );
      if (response.status >= 200) {
        alert(`subCategory update successfully`);
        navigate("/subcategory");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={updateSubCategory}>
        <label htmlFor="newCategory">Category name</label>
        <input
          type="text"
          name="name"
          placeholder="enter category name"
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="imgage">Peste imageUrl</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="put your image url"
          value={data.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <input
          type="text"
          name="status"
          placeholder="give status"
          value={data.status}
          onChange={handleChange}
        />
        <label htmlFor="categoryId">CategoryId</label>
        <input
          type="text"
          name="categoryId"
          placeholder="Enter categoryId"
          value={data.categoryId}
          onChange={handleChange}
        />
        <button className="bg-green-600 p-1 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default EditSubCategory;
