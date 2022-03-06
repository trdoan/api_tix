const { Router } = require("express");
const {
  findAllCineplex,
  deleteCineplex,
  updateCineplex,
  createCineplex,
  findAllWithShowTime,
} = require("../controllers/cineplexs.controller");
const { checkExists } = require("../middlewares/user.middleware");
const { Cineplex } = require("../../models");
const cineplexsRouter = Router();

cineplexsRouter.get("/", findAllCineplex);
cineplexsRouter.get("/layLichChieuTheoHeThongRap", findAllWithShowTime);
cineplexsRouter.post("/", createCineplex);
cineplexsRouter.put("/:id", [checkExists(Cineplex)], updateCineplex);
cineplexsRouter.delete("/:id", deleteCineplex);
module.exports = {
  cineplexsRouter,
};
