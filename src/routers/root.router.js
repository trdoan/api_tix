const { Router } = require("express");

const { authRouter } = require("./auth.router");
const { cinemaRouter } = require("./cinema.router");
const { cineplexsRouter } = require("./cineplex.router");
const { movieRouter } = require("./movie.router");
const { ticketRouter } = require("./ticket.router");
const { userRouter } = require("./user.router");

// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./../../documents/swagger.json");
const { showTimeRouter } = require("./show_time.router");
// config routers
const rootRouter = Router();
rootRouter.use("/document", swaggerUi.serve);
rootRouter.get("/document", swaggerUi.setup(swaggerDocument));
rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/movies", movieRouter);
rootRouter.use("/cineplexs", cineplexsRouter);
rootRouter.use("/cinemas", cinemaRouter);
rootRouter.use("/tickets", ticketRouter);
rootRouter.use("/show-times", showTimeRouter);
rootRouter.use("/test", (req, res) => {
  res.cookie("Set-cookie", "test-cookies");
  res.send("success ");
  console.log("asdas");
});

module.exports = { rootRouter };
