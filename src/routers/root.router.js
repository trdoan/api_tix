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
rootRouter.use("/layTokenRac", (req, res) => {
  res.cookie("token", "123123");
  res.send("success");
});
rootRouter.use("/layTokenAdmin", (req, res) => {
  res.cookie(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMCwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuaG9tUXV5ZW4iOiJRVUFOVFJJIiwiaWF0IjoxNjQ2NzI4NTk0fQ.x81U8u61y_BlPyv4PmP9WAPed69VzGdOIRTFyDkwSAg"
  );
  res.send("success");
});
rootRouter.use("/layTokenClient", (req, res) => {
  res.cookie(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1NywiZW1haWwiOiJQaEhuZ19Ib25nNDhAeWFob28uY29tIiwibmhvbVF1eWVuIjoiTkdVT0lEVU5HIiwiaWF0IjoxNjQ2NzI5NTY0fQ.EzovN5H5Fz6d_NItRV3RpwMb-IxFbQkATEJk_z0-FfU"
  );
  res.send("success");
});

module.exports = { rootRouter };
