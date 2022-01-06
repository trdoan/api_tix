const { Router } = require("express");
const { authRouter } = require("./auth.router");
const { cinemaRouter } = require("./cinema.router");
const { cineplexsRouter } = require("./cineplex.router");

const { movieRouter } = require("./movie.router");
const { userRouter } = require("./user.router");
const rootRouter = Router();
rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/movies", movieRouter);
rootRouter.use("/cineplexs", cineplexsRouter);
rootRouter.use("/cinemas", cinemaRouter);
module.exports = { rootRouter };
