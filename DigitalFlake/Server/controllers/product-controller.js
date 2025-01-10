const { PrismaClient } = require("@prisma/client");
const { isDirty } = require("zod");
const prisma = new PrismaClient();

//get all all products

const getProducts = async (req, res, next) => {
  try {
    const getP = await prisma.product.findMany({
      where: { isDelete: false },
      include: { category: true, subcategory: true },
    });

    if (getP.length === 0) {
      return res.status(401).json({ message: "no product found" });
    }
    res.status(200).json(getP);
  } catch (error) {
    next();
  }
};

//to create product

const createProduct = async (req, res, next) => {
  const { name, imageUrl, status, categoryId, subcategoryId } = req.body;
  try {
    if (!name || !imageUrl || !status || !subcategoryId || !categoryId) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const create = await prisma.product.create({
      data: {
        name,
        imageUrl,
        status,
        categoryId,
        subcategoryId,
      },
    });

    //sending response
    res.status(200).json({ message: "Successfully create product", create });
  } catch (error) {
    next(error);
  }
};

//to update product
const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, imageUrl, status, subcategoryId, categoryId } = req.body;
  try {
    const update = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        imageUrl,
        status,
        categoryId,
        subcategoryId,
      },
    });

    if (!update) {
      res.status(401).json({ message: "Something wrong product not updated" });
    }

    //send response
    res.status(200).json({ message: "Product updated successfully", update });
  } catch (error) {
    next(error);
  }
};

//to delete product
const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteP = await prisma.product.delete({
      where: { id: parseInt(id) },
    });

    if (!deleteP) {
      return res
        .status(401)
        .json({ message: "something wrong not able to delete product" });
    }

    //send response
    res.status(200).json({ message: "Product delete successfully", deleteP });
  } catch (error) {}
};

//to get product by id
const getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getP = await prisma.product.findUnique({
      where: { id: parseInt(id), isDelete: false },
      include: { category: true, subcategory: true },
    });

    if (!getP || getP.isDelete === true) {
      return res.status(401).json({ message: "Product not found" });
    }

    //sending response
    res.status(200).json({ message: "successfully get product", getP });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
};
