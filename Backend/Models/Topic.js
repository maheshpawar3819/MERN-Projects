const mongoose = require("mongoose");

// Define block schema as a subdocument
const blockSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Block text is required"], // Add custom validation message
  },
  category: { 
    type: String, 
    enum: ['understood', 'somewhat-understood', 'not-clear', 'what-rubbish'], 
    required: true 
  }  
});

// Define topic schema
const topicSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"], // Add custom validation message
    },
    title: {
      type: String,
      required: [true, "Topic title is required"], // Add custom validation message
    },
    blocks: {
      type: [blockSchema], // An array of blocks
      validate: {
        validator: (blocks) => blocks.length > 0,
        message: "At least one block is required", // Ensure at least one block is present
      },
    },
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt`
);

// Export the model
module.exports = mongoose.model("Topic", topicSchema);
