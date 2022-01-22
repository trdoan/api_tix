const { Router } = require("express");
const {
  findCinema,
  updateCinema,
  createCinema,
  deleteCinema,
  findMoviesByCinema,
} = require("../controllers/cinemas.controller");

const cinemaRouter = Router();

cinemaRouter.get("/", findCinema);
cinemaRouter.get("/movies-by-cinema/:id", findMoviesByCinema);
cinemaRouter.post("/", createCinema);
cinemaRouter.get("/:id", findCinema);
cinemaRouter.put("/:id", updateCinema);
cinemaRouter.delete("/:id", deleteCinema);

module.exports = {
  cinemaRouter,
};
