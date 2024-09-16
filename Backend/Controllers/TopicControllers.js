const Topic = require("../Models/Topic");

// Get all topics for the current user
exports.getAllTopics = async (req, res) => {
  const username = req.query.username;
  console.log("Query Params:", req.query); // Check the query params

  try {
    const query = username
      ? { username: new RegExp(`^${username}$`, "i") }
      : {}; // Case-insensitive search
    const topics = await Topic.find(query);
    res.status(200).json(topics);
    console.log("Topics found:", topics);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// Add a new topic
exports.addTopic = async (req, res) => {
  const { username, title, blocks } = req.body;

  try {
    const newTopic = new Topic({ username, title, blocks });
    const savedTopic = await newTopic.save();
    res.status(201).json(savedTopic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
