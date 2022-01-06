require("dotenv").config();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const SAVE_LOCAL = process.env.SAVE_LOCAL;
const ERROR_MESSAGE = process.env.ERROR_MESSAGE;
module.exports = {
  PORT,
  SECRET_KEY,
  SAVE_LOCAL,
  ERROR_MESSAGE,
};
