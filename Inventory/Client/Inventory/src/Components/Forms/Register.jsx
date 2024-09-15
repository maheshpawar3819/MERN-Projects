import React, { useState } from "react";
import { MdMarkEmailRead, MdOutlineAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Store/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //sending data to store for request
    await dispatch(register(name, email, password, role));
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <MdOutlineAssignment className="size-20" />
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">
            Register
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#16423C] border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#16423C] border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#16423C] border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter your role (Employee,Manager,Admin)"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#16423C] border-gray-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#6A9C89] text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Regiter Now
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Already Have A Account?{" "}
            <p className="text-[#16423C] font-semibold hover:underline">
              <Link to={"/login"}>Login</Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
