const { Router } = require("express");
const {
  signIn,
  signUp,
  resetPassword,
} = require("../controllers/auth.controller");

const { sendPassToEmail } = require("../middlewares/user.middleware");

const authRouter = Router();

authRouter.post("/dang-nhap", signIn);
authRouter.post("/dang-ky", signUp);
authRouter.post("/quen-mat-khau", [sendPassToEmail], resetPassword);

module.exports = { authRouter };
