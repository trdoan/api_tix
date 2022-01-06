const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY, ERROR_MESSAGE } = require("./../../config");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    let isLogin = bcrypt.compareSync(password, user.password);
    if (isLogin) {
      const payload = { id: user.id, email: user.email, role: user.role };
      const token = jwt.sign(payload, SECRET_KEY);
      res.status(200).send({ message: "Đăng nhập thành công", token });
    } else {
      res.status(404).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    }
  } catch (error) {
    res.status(500).send(ERROR_MESSAGE);
  }
};
const signUp = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
    });
    res
      .status(201)
      .send({ message: "Đăng ký tài khoản thành công", description: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: ERROR_MESSAGE });
  }
};
const resetPassword = (req, res) => {
  try {
    res.status(200).send({
      message: "Vui lòng kiểm tra email đã đăng ký, để nhận mật khẩu mới",
    });
  } catch (error) {
    console.log(error);
    console.log("message: " + ERROR_MESSAGE);
    res.status(500).send({ status: 500, message: "test" });
  }
};

module.exports = {
  signIn,
  signUp,
  resetPassword,
};
