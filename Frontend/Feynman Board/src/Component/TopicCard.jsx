import React from "react";

const TopicCard = ({ topic }) => {
  const calculateProgress = (blocks) => {
    const totalPoints = blocks.reduce((acc, block) => {
      switch (block.category) {
        case "understood":
          return acc + 4;
        case "somewhat-understood":
          return acc + 3;
        case "not-clear":
          return acc + 2;
        case "what-rubbish":
          return acc + 1;
        default:
          return acc;
      }
    }, 0);
    return (totalPoints / (blocks.length * 4)) * 100;
  };

  const progress = calculateProgress(topic.blocks);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
      <p className="text-gray-700">Progress: {progress.toFixed(2)}%</p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TopicCard;
