const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const checkErrorRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  } else {
    next();
  }
};
const checkFieldsValid = (method) => {
  switch (method) {
    case "/dang-ky": {
      return [
        body("hoTen").exists().withMessage("Không tìm thấy trường họ tên"),
        body("email")
          .exists()
          .withMessage("Không tìm thấy trường email")
          .isEmail()
          .withMessage("Email không đúng định dạng"),
        body("matKhau").exists().withMessage("Không tìm thấy trường mật khẩu"),
        body("soDT").exists().withMessage("Không tìm thấy trường số điện thoại"),
      ];
    }
    case "/dang-nhap": {
      return [
        body("email")
          .exists()
          .withMessage("Không tìm thấy trường email")
          .isEmail()
          .withMessage("Email không đúng định dạng"),
        body("matKhau").exists().withMessage("Không tìm thấy trường mật khẩu"),
      ];
    }
    case "/quen-mat-khau": {
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
  checkFieldsValid,
  checkErrorRequest,
};
