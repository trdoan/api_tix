const { Router } = require("express");
const {
  findAllMovie,
  findDetailMovie,
} = require("../controllers/movies.controller");

const movieRouter = Router();
movieRouter.get("/", findAllMovie);
movieRouter.get("/:id", findDetailMovie);
module.exports = { movieRouter };
