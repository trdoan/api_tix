const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const { ERROR_MESSAGE, SUCCESS_MESSAGE } = require("../../config");
const uploadAvatar = async (req, res) => {
  const { user, linkImage } = req;
  const userUpload = await User.findByPk(user.id);

  userUpload.avatar = linkImage;
  userUpload.save();

  res.status(200).send({ message: SUCCESS_MESSAGE });
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
    console.log(error);
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
    const { hoTen, email, matKhau, soDT, nhomQuyen, avatar } = req.body;
    if (hoTen && matKhau) {
      let salt = bcrypt.genSaltSync(10);
      let hashPassword = bcrypt.hashSync(matKhau, salt);
      const newUser = await User.create({
        hoTen,
        email,
        matKhau: hashPassword,
        soDT,
        nhomQuyen,
        avatar,
      });
      res.status(201).send({ message: SUCCESS_MESSAGE });
    } else {
      res.status(400).send({ message: "Dữ liệu không hợp lệ" });
    }
  } catch (error) {
    const { code } = error.original;
    const { errors } = error;

    if (code === "ER_DUP_ENTRY") {
      let key = errors[0].path;
      switch (key) {
        case "soDT":
          key = "Số điện thoại";
          break;
        case "email":
          key = "Email";
          break;
        default:
          break;
      }
      res.status(400).send({ message: key + " đã tồn tại" });
    } else {
      console.log(error);
      res.status(500).send({ status: 500, message: ERROR_MESSAGE });
    }
  }
};
const update = async (req, res) => {
  const { id } = req.params;
  const { hoTen, email, matKhau, soDT, nhomQuyen } = req.body;
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(matKhau, salt);
  const nhomQuyenDecoded = req.user.nhomQuyen;
  let userUpdate;
  if (nhomQuyenDecoded === "QUANTRI") {
    console.log("zo  if ne");
    userUpdate = {
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
      nhomQuyen,
    };
  } else if (id == req.user.id) {
    console.log("zo else if ne");
    userUpdate = {
      hoTen,
      email,
      matKhau: hashPassword,
      soDT,
    };
  }
  console.log({ userUpdate });
  if (userUpdate) {
    if (["QUANTRI", "NGUOIDUNG"].includes(nhomQuyen)) {
      try {
        await User.update(userUpdate, {
          where: {
            id,
          },
        });
        res.status(200).send({ message: SUCCESS_MESSAGE });
      } catch (error) {
        const { code } = error.original;
        const { errors } = error;
        if (code === "ER_DUP_ENTRY") {
          let key = errors[0].path;
          switch (key) {
            case "soDT":
              key = "Số điện thoại";
              break;
            case "email":
              key = "Email";
              break;
            default:
              break;
          }
          res.status(400).send({ message: key + " đã tồn tại" });
        } else {
          console.log(error);
          res.status(500).send({ status: 500, message: ERROR_MESSAGE });
        }
      }
    } else {
      res.status(400).send({ message: "Nhóm quyền không hợp lệ" });
    }
  } else {
    res.status(403).send({ message: "Không có quyền thực hiện thao tác" });
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
