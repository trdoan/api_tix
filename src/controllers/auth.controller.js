const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY, ERROR_MESSAGE } = require("./../../config");
const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");
const signIn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  try {
    const { matKhau } = req.body;
    const { user } = req;
    const isLogin = bcrypt.compareSync(matKhau, user.matKhau);
    if (isLogin) {
      const payload = {
        id: user.id,
        email: user.email,
        nhomQuyen: user.nhomQuyen,
      };
      const token = jwt.sign(payload, APP_SECRET_KEY);
      res.status(200).send({
        statusCode: 200,
        message: "Đăng nhập thành công",
        token,
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        message: "Mật khẩu không đúng",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      ERROR_MESSAGE,
    });
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
    res.send({ statusCode: 201, message: "Đăng ký thành công" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: ERROR_MESSAGE });
  }
};
const resetPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email } = req.body;
    const passwordDefault = (Math.random() + 1).toString(36).substring(2);
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(passwordDefault, salt);
    await User.update(
      { password: hashPassword },
      {
        where: { email },
      }
    );

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dantispam2001@gmail.com",
        pass: "doanpro645Aa",
      },
    });
    await transporter.sendMail({
      from: "Tix.vn <dantispam2001@gmail.com>",
      to: email,
      subject: "Đặt lại mật khẩu bởi website clone Tix.vn của Dương Doãn",
      html: `
        <b>Email:</b> ${email} <br/>
        <b>Mật khẩu mới:</b> ${passwordDefault} <br/>
        <p style="text-align: left">Chức năng được thực hiện bởi <b>Dương Doãn</b></p>
        <b style="text-align: left">
          <i>Các hình ảnh, tên thương hiệu được sử dụng hoàn toàn mục đích học tập, không có giá trị kinh doanh, đả kích một đơn vị nào </i>
       </b>
       <br/>
       <b style="text-align: left">
          <i>Trân trọng!</i>
        </b>
        `,
    });
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
