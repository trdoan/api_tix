require("dotenv").config();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const SAVE_LOCAL = process.env.SAVE_LOCAL;
const ROLE_USER_CLIENT = process.env.ROLE_USER_CLIENT;
const ROLE_USER_ADMIN = process.env.ROLE_USER_ADMIN;
const AVATAR_USER_DEFAUT = process.env.AVATAR_USER_DEFAUT;
const ERROR_MESSAGE = process.env.ERROR_MESSAGE;
module.exports = {
  PORT,
  SECRET_KEY,
  SAVE_LOCAL,
  ERROR_MESSAGE,
  ROLE_USER_ADMIN,
  ROLE_USER_CLIENT,
  AVATAR_USER_DEFAUT,
};
