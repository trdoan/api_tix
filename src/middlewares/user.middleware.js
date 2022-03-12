const { ERROR_MESSAGE } = require("../../config");
const { User } = require("../../models");

const checkUniqueFields = async (req, res, next) => {
  // user has two unique field: email, phone
  try {
    const { email, soDT } = req.body;
    const emailDB = await User.findOne({ where: { email } });
    const phoneDB = await User.findOne({ where: { soDT } });
    const errors = [];
    emailDB &&
      errors.push({
        msg: "Email đã tồn tại",
      });
    phoneDB &&
      errors.push({
        msg: "Số điện đã tồn tại",
      });
    errors.length > 0
      ? res.status(400).send({ statusCode: 400, errors })
      : next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: ERROR_MESSAGE });
  }
};
module.exports = {
  checkUniqueFields,
};
