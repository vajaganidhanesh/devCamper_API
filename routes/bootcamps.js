const express = require("express");
const routes = express.Router();
const {
  getBootcamp,
  getSingleBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controller/bootcamps");

routes.route("/").get(getBootcamp).post(createBootcamp);
routes
  .route("/:id")
  .get(getSingleBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = routes;
