const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY, ERROR_MESSAGE } = require("./../../config");
const { body, validationResult } = require("express-validator");
const signIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, matKhau } = req.body;
    const user = await User.findOne({ where: { email } });
    let isLogin = false;
    if (user) {
      isLogin = bcrypt.compareSync(matKhau, user.matKhau);
      if (isLogin) {
        const payload = {
          id: user.id,
          email: user.email,
          nhomQuyen: user.nhomQuyen,
        };
        const token = jwt.sign(payload, APP_SECRET_KEY);
        res.status(200).send({ message: "Đăng nhập thành công", token });
      } else {
        res.status(404).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
      }
    } else {
      res.status(404).send({ message: "Email không tồn tại" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(ERROR_MESSAGE);
  }
};
const signUp = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { hoTen, email, matKhau, soDT } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(matKhau, salt);
    await User.create({
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
    });
    res.send({ message: "Đăng ký thành công" });
  } catch (error) {
    const code = error.original?.code;
    const errors = error.errors;
    if (code === "ER_DUP_ENTRY") {
      let key = errors[0].path;
      switch (key) {
        case "soDT":
          key = "Số điện thoại";
          break;
        case "email":
          key = "Email";
          break;
        default:
          break;
      }
      res.status(400).send({ message: key + " đã tồn tại" });
    } else {
      console.log(error);
      res.status(500).send({ status: 500, message: ERROR_MESSAGE });
    }
  }
};
const resetPassword = (req, res) => {
  try {
    res.status(200).send({
      message: "Đặt lại mật khẩu thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: ERROR_MESSAGE });
  }
};

module.exports = {
  signIn,
  signUp,
  resetPassword,
};
