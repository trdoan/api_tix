const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const { ERROR_MESSAGE } = require("../../config");
const uploadAvatar = async (req, res) => {
  const { user, linkImage } = req;
  const userUpload = await User.findByPk(user.id);

  userUpload.avatar = linkImage;
  userUpload.save();

  res.status(200).send({ message: "Cập nhật ảnh đại diện thành công" });
};
const findAll = async (req, res) => {
  try {
    const userList = await User.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: ERROR_MESSAGE,
    });
  }
};
const findDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: "Người dùng không tồn tại" });
    }
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: ERROR_MESSAGE,
    });
  }
};
const create = async (req, res) => {
  try {
    const { name, email, password, phone, role, avatar } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
      role,
      avatar,
    });
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: ERROR_MESSAGE });
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phone, role } = req.body;
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(password, salt);
  const userUpdate = { name, email, password: hashPassword, phone, role };

  try {
    await User.update(userUpdate, {
      where: {
        // find id need update
        id,
      },
    });
    res
      .status(200)
      .send({ status: 200, message: `Cập nhật người dùng thành công` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: 500, message: ERROR_MESSAGE });
  }
};
const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        // find id need delete
        id,
      },
    });
    res.status(200).send({
      status: 200,
      message: `Xóa người dùng thành công`,
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: ERROR_MESSAGE });
  }
};

module.exports = {
  findAll,
  findDetail,
  create,
  update,
  remove,
  uploadAvatar,
};
