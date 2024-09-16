import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopicCard from "./TopicCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const Dashboard = () => {
  const [topics, setTopics] = useState([]);
  const username = localStorage.getItem("username"); // Check if the username exists
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if no username (user is not logged in)
    if (!username) {
      toast.error("You must be logged in to view the dashboard.");
      navigate("/login"); // Redirect to login page
      return;
    }

    // Fetch topics if the user is logged in
    axios
      .get(`https://feynman-board.onrender.com/topics?username=${username}`)
      .then((response) => setTopics(response.data))
      .catch((err) => console.error(err));
  }, [username, navigate]);

  // If the username doesn't exist, return null to prevent the dashboard from rendering
  if (!username) {
    return null; // This ensures nothing renders before the redirection
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        <Link to="/addtopic">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Add Topic
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.length > 0 ? (
          topics.map((topic) => <TopicCard key={topic._id} topic={topic} />)
        ) : (
          <p>No topics available.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
