const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY } = require("../../../config");
// test bug fake token
const { User } = require("../../../models");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  if (token) {
    try {
      const decode = jwt.verify(token, APP_SECRET_KEY);
      req.user = decode;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ message: "Bạn không có quyền thực hiện thao tác" });
    }
  } else {
    res.status(404).send({ message: "Bạn chưa đăng nhập" });
  }
};
// check role
const authorize = (arrayRole) => async (req, res, next) => {
  try {
    // role params from request
    const { role } = req.user;
    console.log(req.user);
    // find userDB from token valid from request
    const userDB = await User.findByPk(req.user.id);
    console.log(userDB);
    console.log({ id: userDB.id, email: userDB.email, role: userDB.role });
    if (
      userDB
      // userDB.id === req.user.id &&
      // userDB.email === req.user.email &&
      // userDB.role === req.user.email
    ) {
      console.log(userDB.id, userDB.email, userDB.role);
      console.log(req.user);
      if (arrayRole.includes(role)) {
        next();
      } else {
        res.status(403).send({ message: "Không có quyền thực hiện thao tác" });
      }
    } else {
      res.status(403).send({ message: "Token không hợp lệ hoặc hết hạn" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
};
module.exports = {
  authenticate,
  authorize,
};
