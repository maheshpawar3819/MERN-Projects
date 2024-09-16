const delimiters = /[,\-()\[\]{}''""\/|:;?.\n]+/;
import "../index.css";

const categorizeContent = (content) => {
  const blocks = content.split(delimiters).filter(Boolean);
  return blocks.map((block) => ({
    text: block,
    category: "understood",
  }));
};

export default categorizeContent;
