const express = require("express");
const { getAllTopics, addTopic } = require("../Controllers/TopicControllers");

const router = express.Router();

// GET all topics for a user
router.get("/", getAllTopics);

// POST a new topic
router.post("/", addTopic);

module.exports = router;