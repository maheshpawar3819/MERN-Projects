const delimiters = /[,\-()\[\]{}''""\/|:;?.\n]+/;

const categorizeContent = (content) => {
  const blocks = content.split(delimiters).filter(Boolean);
  return blocks.map((block) => ({
    text: block,
    category: "not-categorized",
  }));
};

export default categorizeContent;
