const { Router } = require("express");
const { signIn, signUp, resetPassword } = require("../controllers/auth.controller");
const { checkEmailExist } = require("../middlewares/auth.middleware");

const { checkUniqueFields } = require("../middlewares/user.middleware");
const { checkFieldsValid } = require("../middlewares/validation/checkRequest");

const authRouter = Router();

authRouter.post("/dang-nhap", checkFieldsValid("/dang-nhap"), checkEmailExist, signIn);
authRouter.post("/dang-ky", checkFieldsValid("/dang-ky"), checkUniqueFields, signUp);
authRouter.post(
  "/quen-mat-khau",
  checkFieldsValid("/quen-mat-khau"),
  checkEmailExist,
  resetPassword
);

module.exports = { authRouter };
