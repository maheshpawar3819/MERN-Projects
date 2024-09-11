const catchAsync = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((e) => {
    console.log("promise can not breaked");
    next(e);
  });
};

module.exports = catchAsync;
