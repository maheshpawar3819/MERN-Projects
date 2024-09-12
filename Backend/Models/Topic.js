const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    title: { type: String, required: true },
    blocks: [
      {
        text: { type: String, required: true },
        category: {
          type: String,
          enum: [
            "understood",
            "somewhat-understood",
            "not-clear",
            "what-rubbish",
          ],
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Topic", topicSchema);
