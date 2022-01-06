const nodemailer = require("nodemailer");
const { ERROR_MESSAGE } = require("../../config");

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 0 || name.length > 15) {
    res.status(404).send({ message: "Tên có tối đa 15 ký tự" });
  } else {
    next();
  }
};
const checkExists = (modelName) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const statusID = await modelName.findByPk(id);
    if (statusID) {
      next();
    } else {
      res.status(404).send({ message: "Không tìm thấy tài nguyên" });
    }
  };
};

const sendPassToEmail = async (req, res, next) => {
  try {
    // get
    // const { email } = req.userInfo.dataValues;
    const { email, maBiMat } = req.body;
    // const { newPassword } = req.userInfo;
    // console.log("Email");
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dantispam2001@gmail.com",
        pass: "doanpro645Aa",
      },
    });
    // let info = await transporter.sendMail({
    //   from: "Tix.vn <dantispam2001@gmail.com>",
    //   to: email,
    //   subject: "Đặt lại mật khẩu bởi website clone Tix.vn của Dương Doãn",
    //   html: `
    //   <b>Tài khoản:</b> ${email} <br/>
    //   <b>Mật khẩu mới:</b> ${newPassword} <br/>
    //   <p style="text-align: left">Chức năng được thực hiện bởi <b>Dương Doãn</b></p>
    //   <b style="text-align: left">
    //     <i>Các hình ảnh, tên thương hiệu được sử dụng hoàn toàn mục đích học tập, không có giá trị kinh doanh, đả kích một đơn vị nào </i>
    //  </b>
    //  <b style="text-align: left">
    //     <i>Trân trọng!</i>
    //   </b>
    //   `,
    // });
    let info = await transporter.sendMail({
      from: "CSL KTTTVT <dantispam2001@gmail.com>",
      to: email,
      subject: "Mã bí mật điểm danh 07/01/2022",
      html: `
      <b>Email:</b> ${email} <br/>
      <b>Mã bí mật:</b> ${maBiMat} <br/>
      `,
    });
    next();
  } catch (error) {
    // console.log(error);
    console.log(ERROR_MESSAGE);
    res.status(500).send(ERROR_MESSAGE);
  }
};
module.exports = {
  checkName,
  checkExists,
  sendPassToEmail,
};
