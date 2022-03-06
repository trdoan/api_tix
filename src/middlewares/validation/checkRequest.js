const { body } = require("express-validator");

const validate = (method) => {
  switch (method) {
    case "dangKyAPI": {
      return [
        body("hoTen").exists().withMessage("Không tìm thấy trường họ tên"),
        body("email")
          .exists()
          .withMessage("Không tìm thấy trường email")
          .isEmail()
          .withMessage("Email không đúng định dạng"),
        body("matKhau").exists().withMessage("Không tìm thấy trường mật khẩu"),
        body("soDT")
          .exists()
          .withMessage("Không tìm thấy trường số điện thoại"),
      ];
    }
    case "dangNhapAPI": {
      return [
        body("email")
          .exists()
          .withMessage("Không tìm thấy trường email")
          .isEmail()
          .withMessage("Email không đúng định dạng"),
        body("matKhau").exists().withMessage("Không tìm thấy trường mật khẩu"),
      ];
    }
    case "quenMatKhau": {
      return [
        body("email")
          .exists()
          .withMessage("Không tìm thấy trường email")
          .isEmail()
          .withMessage("Email không đúng định dạng"),
      ];
    }
  }
};
module.exports = {
  validate,
};
