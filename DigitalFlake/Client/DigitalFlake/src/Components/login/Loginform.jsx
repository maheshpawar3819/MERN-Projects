import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

      if (response.status >= 200) {
        localStorage.setItem("token", response?.data?.token);
        console.log(response?.data?.user);
        dispatch(login(response?.data?.user));
        toast.success(response?.data?.message);
        navigate("/category");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Faild to login");
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/034/573/914/non_2x/empty-wooden-table-set-with-warehouse-theme-product-showcase-ai-generated-free-photo.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">
          Digital<span className="text-[#662671]">Flake</span> Admin
        </h2>
        <p className="text-center mb-4">Welcome to DigitalFlake Admin Panel</p>
        <form
          action=""
          onSubmit={loginUser}
          className="flex flex-col space-y-4"
        >
          <div>
            <label htmlFor="emailid" className="block mb-1 text-sm font-medium">
              Email-Id
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <p className="text-center mb-4 cursor-pointer">
            <Link to={"/register"}>
              New User?{" "}
              <span className="hover:text-blue-500">Register Now</span>
            </Link>
          </p>
          <button className="w-full bg-[#662671] text-white p-2 rounded-md shadow-lg hover:bg-[#7e308c] transition-colors">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
