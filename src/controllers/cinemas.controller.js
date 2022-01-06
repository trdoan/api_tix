const { Cinema } = require("../../models");
const findCinema = async (req, res) => {
  try {
    const { id } = req.params;
    let data;
    if (id) {
      data = data = await Cinema.findAll({
        attributes: {
          exclude: ["cineplexId", "createdAt", "updatedAt"],
        },
        where: {
          id,
        },
      });
    } else {
      data = await Cinema.findAll({
        attributes: {
          exclude: ["cineplexId", "createdAt", "updatedAt"],
        },
      });
    }
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};

const createCinema = async (req, res) => {
  try {
    const { name, address, image, cineplexId } = req.body;
    await Cinema.create({
      name,
      address,
      image,
      cineplexId,
    });
    res.send({ message: "Tạo cụm rạp thành công" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};
const updateCinema = (req, res) => {
  res.send("Cập nhật cụm rạp");
};
const deleteCinema = async (req, res) => {
  try {
    const { id } = req.params;
    await Cinema.destroy({
      where: {
        id,
      },
    });
    res.send("Xóa cụm rạp thành công");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};
module.exports = {
  findCinema,
  createCinema,
  updateCinema,
  deleteCinema,
};
