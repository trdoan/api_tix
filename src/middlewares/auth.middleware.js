const { User } = require("../../models");
const checkEmailExist = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(404).send({ statusCode: 404, message: "Email không tồn tại" });
  }
};
module.exports = {
  checkEmailExist,
};
