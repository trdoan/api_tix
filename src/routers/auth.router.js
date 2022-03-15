const { Router } = require("express");
const { signIn, signUp, resetPassword } = require("../controllers/auth.controller");
const { checkEmailExist } = require("../middlewares/auth.middleware");
const { checkErrorRequest, checkFieldsValid } = require("../middlewares/common.middleware");

const { checkUniqueFields } = require("../middlewares/user.middleware");

const authRouter = Router();

authRouter.post(
  "/dang-nhap",
  checkFieldsValid("/dang-nhap"),
  checkErrorRequest,
  checkEmailExist,
  signIn
);
authRouter.post(
  "/dang-ky",
  checkFieldsValid("/dang-ky"),
  checkErrorRequest,
  checkUniqueFields,
  signUp
);
authRouter.post(
  "/quen-mat-khau",
  checkFieldsValid("/quen-mat-khau"),
  checkErrorRequest,
  checkEmailExist,
  resetPassword
);

module.exports = { authRouter };
