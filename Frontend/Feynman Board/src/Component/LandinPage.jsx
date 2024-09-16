import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username is not empty and contains only alphanumeric characters
    const isValidUsername = /^[a-zA-Z0-9]+$/.test(username);

    if (username && isValidUsername) {
      localStorage.setItem("username", username);
      navigate("/dashboard");
    } else {
      setWarning(true); // Show warning if username is invalid or empty
    }
  };

  const handleChange = (e) => {
    // Remove spaces from the input value
    const value = e.target.value.replace(/\s/g, '');
    setUsername(value);
    setWarning(false); // Hide warning when user starts typing
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Feynman Board</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg"
      >
        <input
          type="text"
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          placeholder="Enter your username"
          value={username}
          onChange={handleChange}
        />
        {warning && (
          <p className="text-red-500 mb-4">
            Username is required and must be alphanumeric without spaces!
          </p> // Warning message
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
