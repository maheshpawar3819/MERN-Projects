const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//to get all categories

const getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      include: { subcategories: true, products: true },
    });
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

const createNewCategory = async (req, res, next) => {
  try {
    const { name, imageUrl, status } = req.body;
    //check if any field is empty
    if ((!name, !imageUrl, !status)) {
      return res.status(401).json({ message: "plese fill all fields" });
    }

    const createCategory = await prisma.category.create({
      data: {
        name,
        imageUrl,
        status,
      },
    });

    //sending response
    res.status(200).json({ createCategory });
  } catch (error) {
    next();
  }
};

module.exports = { getCategories };
