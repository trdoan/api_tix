const { body, param, query } = require("express-validator");
const { validationResult } = require("express-validator");
const { ERROR_MESSAGE } = require("../../config");
const { User } = require("./../../models");
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
const checkFieldsValid = (path) => {
  switch (path) {
    case "/dang-ky": {
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
    case "/:id": {
      return [param("id").isInt().withMessage("Tham số id không hợp lệ")];
    }
    case "/taoNguoiDung": {
      return [
        body("email")
          .exists()
          .withMessage("Không tìm thấy trường email")
          .isEmail()
          .withMessage("Email không đúng định dạng"),
        body("hoTen").exists().withMessage("Không tìm thấy trường họ tên"),
        body("soDT")
          .exists()
          .withMessage("Không tìm thấy trường số điện thoại"),
        body("matKhau")
          .exists()
          .withMessage("Không tìm thấy trường số điện thoại"),
      ];
    }

    case "/capNhatNguoiDung": {
      return [
        param("id")
          .exists()
          .withMessage("Thiếu trường id")
          .isInt()
          .withMessage("Tham số id phải là số nguyên"),
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
        body("nhomQuyen")
          .exists()
          .withMessage("Không tìm thấy trường nhóm quyền"),
      ];
    }
  }
};
const checkExists = (modelName) => {
  return async (req, res, next) => {
    try {
      const id = req.params.id;
      const idToken = req.user.id;
      const checkParam = await modelName.findByPk(id);
      const checkToken = await User.findByPk(idToken);
      if (checkToken && checkParam) {
        next();
      }
      if (checkToken && checkParam) {
        // sadsa
        res
          .status(404)
          .send({ statusCode: 404, message: "Không tìm thấy tài nguyên" });
      } else {
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ statusCode: 500, message: ERROR_MESSAGE });
    }
  };
};

module.exports = {
  checkExists,
  checkFieldsValid,
  checkErrorRequest,
};
