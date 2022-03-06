const { Router } = require("express");
const {
  findCinema,
  updateCinema,
  createCinema,
  deleteCinema,

  addMovieCinema,
  findMoviesByCinema,
} = require("../controllers/cinemas.controller");

const cinemaRouter = Router();

cinemaRouter.get("/movies-by-cinema/:id", findMoviesByCinema);
cinemaRouter.get("/", findCinema);

cinemaRouter.post("/", createCinema);
cinemaRouter.get("/:id", findCinema);
cinemaRouter.put("/:id", updateCinema);
cinemaRouter.delete("/:id", deleteCinema);
cinemaRouter.post("/add-movie-cinema", addMovieCinema);

module.exports = {
  cinemaRouter,
};
