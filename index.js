const express = require("express");
const { rootRouter } = require("./src/routers/root.router");
const cors = require("cors");
const { PORT, SAVE_LOCAL } = require("./config");
const path = require("path");
const app = express();
const http = require("http");
app.use(cors());
// format JSON request
app.use(express.json());

if (SAVE_LOCAL == "true") {
  // setup static file
  const pathPublicDir = path.join(__dirname, "./public");
  // http://localhost:3030/public
  app.use(express.static(pathPublicDir));
}

// http://localhost:3030/
app.get("/", (req, res) => {
  res.send("Welcome to my API clone-tix.vn by doandev");
});
setInterval(function () {
  console.log("hack herokuapp");
  http.get("http://api-react-movie.herokuapp.com");
}, 300000 * 4);

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log("listening on PORT", PORT);
});
