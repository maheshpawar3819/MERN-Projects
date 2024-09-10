const adminMiddleware = async (req, res, next) => {
  try {
    // console.log(req.user);
    // req.user is custom property  which is comming from auth middleware
    const adminRole = req.user.isAdmin;

    //handline error
    if (!adminRole) {
      return res
        .status(404)
        .json({ message: "Access denied. User is not an admin" });
    }
    // res.status(200).json({ message: req.user.isAdmin });
    //next() sending forword
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
