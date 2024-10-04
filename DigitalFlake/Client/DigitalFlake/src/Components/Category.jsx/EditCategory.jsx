import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const [data, setData] = useState({
    name: "",
    imageUrl: "",
    status: "",
  });
  const params = useParams();
  const naivgate=useNavigate();

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
    <div>
      <form action="" onSubmit={updateCategory}>
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
        <button className="bg-green-600 p-1 rounded-md">Update</button>
      </form>
    </div>
  );
};

export default EditCategory;
