const { Router } = require("express");
const { findAllMovie, findDetailMovie, createMovie } = require("../controllers/movies.controller");

const movieRouter = Router();
movieRouter.get("/", findAllMovie);
movieRouter.get("/:id", findDetailMovie);
movieRouter.post("/", createMovie);
module.exports = { movieRouter };
