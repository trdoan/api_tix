const { User } = require("../../../models");
const { ERROR_MESSAGE } = require("../../../config");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const sendPassToEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const passwordDefault = (Math.random() + 1).toString(36).substring(2);
    const userDetail = await User.findOne({
      where: {
        email,
      },
    });
    if (userDetail) {
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
       <b style="text-align: left">
          <i>Trân trọng!</i>
        </b>
        `,
      });
      next();
    } else {
      res.status(404).send({
        messages: "Email không tồn tại",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send(ERROR_MESSAGE);
  }
};
module.exports = {
  sendPassToEmail,
};
