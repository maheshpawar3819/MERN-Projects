const Topic = require("../Models/Topic");

// Get all topics for the current user
exports.getAllTopics = async (req, res) => {
  const username = req.query.username;

  try {
    const topics = await Topic.find({ username });
    res.status(200).json(topics);
  } catch (err) {
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
