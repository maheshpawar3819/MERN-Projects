const { PrismaClient } = require("@prisma/client");
const {
  PrismaClientValidationError,
} = require("@prisma/client/runtime/library");
const prisma = new PrismaClient();

//to get all categories

const getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      where: { isDelete: false }, // Fetch only non-deleted categories
      include: { subcategories: true, products: true },
    });

    if (!categories) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

// to create new category
const createNewCategory = async (req, res, next) => {
  try {
    const { name, imageUrl, status, isDelete } = req.body;
    //check if any field is empty
    if (!name || !imageUrl || !status) {
      return res.status(401).json({ message: "plese fill all fields" });
    }

    const isExist = await prisma.category.findFirst({
      where: { name: name },
    });

    //check is category already exist
    if (isExist) {
      return res.status(401).json({ message: "Category is already exist" });
    }

    const createCategory = await prisma.category.create({
      data: {
        name,
        imageUrl,
        status,
      },
    });

    //sending response
    res
      .status(200)
      .json({ createCategory, message: "Category added successfully" });
  } catch (error) {
    next();
  }
};

//to update category
const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, imageUrl, status } = req.body;

    //update category
    const updateC = await prisma.category.update({
      where: { id: parseInt(id) },
      data: { name, imageUrl, status },
    });

    //send response
    res.status(200).json({ updateC, message: "Successfully update category" });
  } catch (error) {
    next(error);
  }
};

//to delete category
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.category.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Successfully delete category" });
  } catch (error) {
    next(error);
  }
};

//to get category by id

const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id), isDelete: false },
    });

    // Check if the category is deleted or doesn't exist
    if (!category || category.isDelete === true) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(201).json({ category });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCategories,
  createNewCategory,
  updateCategory,
  deleteCategory,
  getCategory,
};
