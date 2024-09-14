import React, { useState } from "react";
import axios from "axios";
import "../index.css";

import categorizeContent from "../utils/categorizeContent";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blocks, setBlocks] = useState([]);

  const handleCategorize = () => {
    const categorizedBlocks = categorizeContent(content);
    setBlocks(categorizedBlocks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");

    // Ensure every block has a category
    const updatedBlocks = blocks.map((block) => {
      if (!block.category) {
        return { ...block, category: "understood" }; // Assign default category
      }
      return block;
    });

    const topicData = { username, title, blocks: updatedBlocks };
    console.log({ username, title, blocks: updatedBlocks }); // Log before submission

    axios
      .post("http://localhost:5000/topics", topicData)
      .then((response) => {
        console.log("Topic saved:", response.data);
        alert("Topic added successfully");
      })
      .catch((err) => {
        console.error(
          "Error saving the topic:",
          err.response ? err.response.data : err.message
        );
        alert("Error saving the topic");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Add a New Topic</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg"
      >
        <input
          type="text"
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          placeholder="Topic Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-gray-300 p-2 mb-4 w-full h-40 rounded"
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600 transition duration-300"
          onClick={handleCategorize}
        >
          Categorize Content
        </button>
        <div className="space-y-2">
          {blocks.map((block, index) => (
            <div key={index} className="flex items-center space-x-4">
              <p className="border p-2 flex-1">{block.text}</p>
              <select
                className="border border-gray-300 p-2 rounded"
                value={block.category}
                onChange={(e) => {
                  const updatedBlocks = blocks.map((b, i) =>
                    i === index ? { ...b, category: e.target.value } : b
                  );
                  setBlocks(updatedBlocks);
                }}
              >
                <option value="understood">Understood</option>
                <option value="somewhat-understood">Somewhat Understood</option>
                <option value="not-clear">Not Clear</option>
                <option value="what-rubbish">What Rubbish</option>
              </select>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 transition duration-300"
        >
          Save Topic
        </button>
      </form>
    </div>
  );
};

export default AddTopic;
