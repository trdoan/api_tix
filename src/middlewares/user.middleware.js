const { ERROR_MESSAGE } = require("../../config");

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 0 || name.length > 15) {
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

module.exports = {
  checkName,
  checkExists,
};
