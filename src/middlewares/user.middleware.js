const { ERROR_MESSAGE } = require("../../config");
const checkEmty = (req, res) => {};
const checkName = (req, res, next) => {
  const { hoTen } = req.body;
  if (hoTen.length < 0 || hoTen.length > 15) {
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
const checkEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const regexEmail = /\S+@\S+\.\S+/;
    const validEmail = regexEmail.test(email);
    validEmail
      ? next()
      : res.status(400).send({ message: "Định dạng email không hợp lệ" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Không có thông tin email" });
  }
};
module.exports = {
  checkName,
  checkExists,
  checkEmail,
};
