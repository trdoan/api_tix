const { User } = require("../../../models");
const bcrypt = require("bcryptjs");
const { ERROR_MESSAGE } = require("../../../config");
const setPasswordDefault = async (req, res, next) => {
  try {
    // const { email } = req.body;
    // const passwordDefault = (Math.random() + 1).toString(36).substring(2);
    // const userDetail = await User.findOne({
    //   where: {
    //     email,
    //   },
    // });
    // if (userDetail) {
    //   const salt = bcrypt.genSaltSync(10);
    //   const hashPassword = bcrypt.hashSync(passwordDefault, salt);
    //   userDetail.password = hashPassword;
    //   userDetail.save();
    //   req.userInfo = { ...userDetail, newPassword: passwordDefault };
    //   next();
    // } else {
    //   res.status(404).send({
    //     messages: "Email không chính xác",
    //   });
    // }
    res.send("SUCCESS")
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: ERROR_MESSAGE });
  }
};
module.exports = {
  setPasswordDefault,
};
