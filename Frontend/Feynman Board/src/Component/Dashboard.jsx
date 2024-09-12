import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import TopicCard from "./TopicCard";
import axios from "axios";

const Dashboard = () => {
  const [topics, setTopics] = useState([]);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/topics?username=${username}`)
      .then((response) => setTopics(response.data))
      .catch((err) => console.error(err));
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={() => navigate("/add-topic")}
        >
          Add Topic
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <TopicCard key={topic._id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
