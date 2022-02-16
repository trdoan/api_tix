const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY, ERROR_MESSAGE } = require("./../../config");

const signIn = async (req, res) => {
  try {
    const { email, matKhau } = req.body;
    const user = await User.findOne({ where: { email } });
    let isLogin = bcrypt.compareSync(matKhau, user.matKhau);
    if (isLogin) {
      const payload = { id: user.id, email: user.email, role: user.role };
      const token = jwt.sign(payload, APP_SECRET_KEY);

      res.status(200).send({ message: "Đăng nhập thành công", token });
    } else {
      res.status(404).send({ message: "Tài khoản hoặc mật khẩu không đúng" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(ERROR_MESSAGE);
  }
};
const signUp = async (req, res) => {
  try {
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
    const { fields } = error;
    if (fields) {
      res.send({
        message: Object.keys(error.fields) + " đã tồn tại",
      });
    } else {
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
