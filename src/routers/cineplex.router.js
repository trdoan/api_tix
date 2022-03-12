const { Router } = require("express");
const {
  findAllCineplex,
  deleteCineplex,
  updateCineplex,
  createCineplex,
  findAllWithShowTime,
} = require("../controllers/cineplexs.controller");

const { Cineplex } = require("../../models");
const { checkExists } = require("../middlewares/common.middleware");
const cineplexsRouter = Router();

cineplexsRouter.get("/", findAllCineplex);
cineplexsRouter.get("/layLichChieuTheoHeThongRap", findAllWithShowTime);
cineplexsRouter.post("/", createCineplex);
cineplexsRouter.put("/:id", [checkExists(Cineplex)], updateCineplex);
cineplexsRouter.delete("/:id", deleteCineplex);
module.exports = {
  cineplexsRouter,
};
