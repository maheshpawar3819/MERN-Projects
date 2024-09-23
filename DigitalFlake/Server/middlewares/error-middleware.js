//the middlewre for handling errors

const errorMiddleware = async (req, res, err) => {
  try {
    const status = err.status || 500;
    const message = err.message || "backend error";
    const extraDetails = err.extraDetails || "error from backend";

    return res.status(status).json({ message, extraDetails });
  } catch (error) {
    console.log(error);
  }
};

module.exports=errorMiddleware;