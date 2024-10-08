import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //register user api
  const registerUser = async (e) => {
    e.preventDefault();
    //destructure state variables
    const { name, email, password } = user;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/register`,
        {
          name,
          email,
          password,
        }
      );
      console.log(response);
      if (response.status >= 200) {
        navigate("/");
        alert("Register successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={registerUser}>
        <label htmlFor="emailid">User Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter your name here"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor="emailid">Email-Id</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button className="bg-purple-500 p-1 px-2 text-white rounded-md">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Register;
