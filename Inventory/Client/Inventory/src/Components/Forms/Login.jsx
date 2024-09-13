import React from "react";
import { SiSimplelogin } from "react-icons/si";
import { Link } from "react-router-dom";



const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <SiSimplelogin className="size-20" />
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">
            Login to Your Account
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
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
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:[#16423C] border-gray-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#6A9C89] text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <p className="text-[#16423C] font-semibold hover:underline">
              <Link to={"/register"}>Sign up</Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
