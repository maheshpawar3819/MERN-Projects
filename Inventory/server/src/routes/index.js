const router = require("express").Router();

const routes = [
  {
    path: "/auth",
    route: require("./auth.route"),
  },
];

routes.forEach((curr) => {
  router.use(curr.path, curr.route);
});

module.exports = router;
