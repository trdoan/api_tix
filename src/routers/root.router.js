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

module.exports = { rootRouter };
