import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopicCard from "./TopicCard";
import axios from "axios";
import "../index.css";

const Dashboard = () => {
  const [topics, setTopics] = useState([]);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topics?username=${username}`)
      .then((response) => setTopics(response.data))

      .catch((err) => console.error(err));
  }, [username]);

  console.log(topics);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        <Link to={"/addtopic"}>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => navigate("/add-topic")}
          >
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
    </div>
  );
};

export default Dashboard;
