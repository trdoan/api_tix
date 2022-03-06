const { Router } = require("express");
const {
  signIn,
  signUp,
  resetPassword,
} = require("../controllers/auth.controller");
const {
  sendPassToEmail,
} = require("../middlewares/auth/reset-password.middleware");
const { validate } = require("../middlewares/validation/checkRequest");

const authRouter = Router();

authRouter.post("/dang-nhap", validate("dangNhapAPI"), signIn);
authRouter.post("/dang-ky", validate("dangKyAPI"), signUp);
authRouter.post(
  "/quen-mat-khau",
  validate("quenMatKhau"),
  [sendPassToEmail],
  resetPassword
);

module.exports = { authRouter };
