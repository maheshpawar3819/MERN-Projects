import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //api call for authentication
  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/auth/login`,
        {
          email,
          password,
        }
      );

      console.log(response);
      if (response.status >= 200) {
        localStorage.setItem("token", response?.data?.token);
        dispatch(login(response.data.user));
        alert(response?.data?.message);
        navigate("/category");
      } else {
        alert(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={loginUser}>
        <label htmlFor="emailid">Email-Id</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button className="bg-purple-500 p-1 px-2 text-white rounded-md">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Loginform;
