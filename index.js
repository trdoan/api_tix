const express = require("express");
const { rootRouter } = require("./src/routers/root.router");
const cors = require("cors");
const { PORT, SAVE_LOCAL } = require("./config");
const path = require("path");
const app = express();

const http = require("http");
// fix cors issues localhost
app.use(cors());

// format JSON request
app.use(express.json());

if (SAVE_LOCAL == "true") {
  const pathPublicDir = path.join(__dirname, "./public");
  app.use(express.static(pathPublicDir));
}

setInterval(() => {
  http.get("http://api-react-movie.herokuapp.com");
}, 300000);

app.use("/api/v1", rootRouter);

// console.log(arrUser);
app.listen(PORT, () => {
  console.log("listening on PORT", PORT);
});
