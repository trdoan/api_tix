const jwt = require("jsonwebtoken");
const { APP_SECRET_KEY } = require("../../../config");
// test bug fake token
const { User } = require("../../../models");
const authenticate = async (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    try {
      const decode = jwt.verify(token, APP_SECRET_KEY);
      req.user = decode;
      const user = await User.findOne({
        where: {
          id: req.user.id,
        },
      });
      if (user) {
        next();
      } else {
        res.status(401).send({ message: "Token đã hết hạn hoặc không hợp lệ" });
      }
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .send({ message: "Bạn không có quyền thực hiện thao tác" });
    }
  } else {
    res.status(401).send({ message: "Bạn chưa đăng nhập" });
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

    if (userDB) {
      console.log(userDB.id, userDB.email, userDB.nhomQuyen);
      console.log({ nguoiThucHien: req.user });
      if (arrayRole.includes(userDB.nhomQuyen)) {
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
