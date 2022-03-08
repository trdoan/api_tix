const { Cineplex, Cinema, Show_Time, Movie, Seat } = require("../../models");
const _ = require("lodash");
const findAllCineplex = async (req, res) => {
  try {
    const cineplexList = await Cineplex.findAll({
      include: [
        {
          model: Cinema,
          as: "danhSachCumRap",
        },
      ],
    });
    const result = [];
    const arrData = JSON.parse(JSON.stringify(cineplexList, null, 2));

    res.send(arrData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
const updateCineplex = async (req, res) => {
  try {
    const { id } = req.params; // get id from url
    const { name, logo } = req.body; // get data need update
    let cineplexUpdate = await Cineplex.update(
      { name, logo },
      {
        where: {
          id,
        },
      }
    );

    res.send({ message: "Cập nhật thành công" });
  } catch (error) {
    console.log(error);
    res.send(JSON.stringify(error, null, 2));
  }
};
const deleteCineplex = async (req, res) => {
  const { id } = req.params;
  try {
    await Cineplex.destroy({
      where: { id },
    });
    res.send("Xóa thành công hệ thống rạp");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
const createCineplex = async (req, res) => {
  try {
    const { name, logo } = req.body;
    const isVaild = await Cineplex.findOne({ where: { name } });
    if (isVaild) {
      res.status(401).send({ message: "Hệ thống rạp đã tồn tại" });
    } else {
      await Cineplex.create({ name, logo });
      res.status(200).send({ message: "Tạo hệ thống rạp thành công" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
const findAllWithShowTime = async (req, res) => {
  try {
    const cineplexList = await Cineplex.findAll({
      include: [
        {
          model: Cinema,
          as: "danhSachCumRap",
          include: [
            {
              model: Show_Time,
              as: "lichChieu",
              attributes: {
                exclude: ["cinemaId", "movieId"],
              },
              include: ["chiTietPhim"],
            },
          ],
        },
      ],
    });
    console.log(cineplexList);
    res.send(cineplexList);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  findAllCineplex,
  createCineplex,
  updateCineplex,
  deleteCineplex,
  findAllWithShowTime,
};
