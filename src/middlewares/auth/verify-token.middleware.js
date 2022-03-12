const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY, ERROR_MESSAGE } = require("../../../config");
const { User } = require("../../../models");

const authenticate = async (req, res, next) => {
  const { token } = req.headers;
  if (token) {
    try {
      const decode = jwt.verify(token, APP_SECRET_KEY);
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
      res.status(400).send({ statusCode: 401, message: "Token không hợp lệ" });
    }
  } else {
    res.status(401).send({ statusCode: 401, message: "Bạn chưa đăng nhập" });
  }
};

// check role
const authorize = (arrayRole) => async (req, res, next) => {
  try {
    // role params from request
    const { nhomQuyen } = req.user;
    if (arrayRole.includes(nhomQuyen)) {
      next();
    } else {
      res.status(403).send({
        statusCode: 403,
        message: "Không có quyền thực hiện thao tác",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: ERROR_MESSAGE });
  }
};
module.exports = {
  authenticate,
  authorize,
};
