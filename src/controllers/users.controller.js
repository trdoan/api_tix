const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const { ERROR_MESSAGE, SUCCESS_MESSAGE } = require("../../config");

const findAll = async (req, res) => {
  try {
    let page = +req.query.page || 1;
    let items = +req.query.items || 10;
    // const role = req.query.role;
    const data = await User.findAndCountAll({
      attributes: {
        exclude: ["matKhau", "createdAt", "updatedAt"],
      },
      // where: { nhomQuyen: role },
      limit: +items,
      offset: +((page - 1) * items),
    });

    const { count: totalItems, rows: userList } = data;
    const totalPage = Math.ceil(totalItems / items);
    res.status(200).send({
      statusCode: 200,
      page,
      totalPage,
      userList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
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
        exclude: ["matKhau", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ statusCode: 200, user });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: ERROR_MESSAGE,
    });
  }
};

const create = async (req, res) => {
  const { hoTen, email, matKhau, soDT, nhomQuyen, avatar } = req.body;
  try {
    let salt = bcrypt.genSaltSync(10);
    let hashPassword = bcrypt.hashSync(matKhau, salt);
    await User.create({
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
      nhomQuyen,
      avatar,
    });
    res.status(201).send({ statusCode: 201, message: SUCCESS_MESSAGE });
  } catch (error) {
    console.log(error);
    res.status(500).send({ statusCode: 500, message: ERROR_MESSAGE });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { hoTen, email, matKhau, soDT, nhomQuyen } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(matKhau, salt);
  const nhomQuyenDecoded = req.user.nhomQuyen;
  let userUpdate = { hoTen, email, matKhau: hashPassword, soDT };
  if (nhomQuyenDecoded === "NGUOIDUNG" && id != req.user.id) {
    res
      .status(403)
      .send({ statusCode: 403, message: "Không có quyền thực hiện thao tác" });
  } else {
    nhomQuyenDecoded === "NGUOIDUNG"
      ? userUpdate
      : (userUpdate = { ...userUpdate, nhomQuyen });
    try {
      await User.update(userUpdate, {
        where: {
          id,
        },
      });
      res.status(200).send({ statusCode: 200, message: SUCCESS_MESSAGE });
    } catch (error) {
      console.log(error);
      res.status(500).send({ statusCode: 500, message: ERROR_MESSAGE });
    }
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: `Xóa người dùng thành công`,
    });
  } catch (error) {
    res.status(500).send({ status: 500, message: ERROR_MESSAGE });
  }
};

const uploadAvatar = async (req, res) => {
  const { user, linkImage } = req;
  const userUpload = await User.findByPk(user.id);
  userUpload.avatar = linkImage;
  userUpload.save();
  res.status(200).send({ statusCode: 200, message: SUCCESS_MESSAGE });
};
module.exports = {
  findAll,
  findDetail,
  create,
  update,
  remove,
  uploadAvatar,
};
