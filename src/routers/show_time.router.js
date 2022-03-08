const { Router } = require("express");
const { getAllShowTimeList } = require("../controllers/show_time.controller");
const showTimeRouter = Router();

showTimeRouter.get("/", getAllShowTimeList);

module.exports = {
  showTimeRouter,
};
