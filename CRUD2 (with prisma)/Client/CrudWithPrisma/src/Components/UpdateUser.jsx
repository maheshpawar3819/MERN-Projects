import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const { id } = useParams();

  //get the data of user
  const getUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/auth/user/${id}`
      );
      console.log(response.data);
      const { name, email } = response?.data;
      setUser({
        name: name,
        email: email,
      });
    } catch (error) {
      console.log("something wrong canget user data");
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...value,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-32 p-6 bg-gray-300 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInput}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
