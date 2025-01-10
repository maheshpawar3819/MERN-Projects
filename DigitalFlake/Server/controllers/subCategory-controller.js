const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//get all subcategories
const getSubcategories = async (req, res, next) => {
  try {
    const subCategoreis = await prisma.subcategory.findMany({
      where: { isDelete: false },
      include: { category: true, products: true },
    });

    if (!subCategoreis) {
      return res.status(401).json({ message: "no subCategory found" });
    }

    res.status(200).json({ subCategoreis });
  } catch (error) {
    next(error);
  }
};

//to create sub-subcategorey
const createSubCategory = async (req, res, next) => {
  const { name, imageUrl, status, categoryId } = req.body;

  try {
    if (!name || !imageUrl || !status || !categoryId) {
      return res.status(401).json({ message: "Plese fill all fields" });
    }

    const create = await prisma.subcategory.create({
      data: {
        name,
        imageUrl,
        status,
        category: { connect: { id: categoryId } },
      },
    });
    res.status(201).json({ create, message: "Succesfully create subCategory" });
  } catch (error) {
    next(error);
  }
};

//update subCategory
const updateSubCategory = async (req, res, next) => {
  const { id } = req.params;
  const { name, imageUrl, status, categoryId } = req.body;
  try {
    const update = await prisma.subcategory.update({
      where: { id: parseInt(id) },
      data: {
        name,
        imageUrl,
        status,
        categoryId,
      },
    });
    //sending response with updated subCategory
    res
      .status(200)
      .json({ message: "SubCategory Updated Successfully", update });
  } catch (error) {
    next(error);
  }
};

//delete subcategory
const deleteSubCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletesub = await prisma.subcategory.delete({
      where: { id: parseInt(id) },
    });
    //sending response
    res
      .status(201)
      .json({ deletesub, message: "sub-category deleted successfully" });
  } catch (error) {
    next(error);
  }
};

//get subcategory by id
const getCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const get = await prisma.subcategory.findUnique({
      where: { id: parseInt(id), isDelete: false },
      include: { category: true, products: true },
    });

    if (!get || get.isDelete === true) {
      return res.status(401).json({ message: "SubCategory not found" });
    }

    //sending response
    res.status(200).json({ get });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSubcategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getCategory,
};
