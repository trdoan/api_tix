const { Show_Time, Cinema, Movie } = require("./../../models");
const _ = require("lodash");
const getAllShowTimeList = async (req, res) => {
  //   res.send("Lay61 danh sach lich chieu");
  try {
    const showTimeList = await Show_Time.findAll({
      raw: true,
      nest: true,
      plain: false,
      include: [
        { model: Cinema, as: "chiTietCumRap" },
        // { model: Movie, as: "chiTietPhim" },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    console.log(showTimeList);
    const temp = _.chain(showTimeList)
      .groupBy("cinemaId")
      .map((value, key) => ({ cinemaId: key, lichChieuTheoCumRap: value }))
      .value();

    res.send(temp);
  } catch (error) {
    console.log(error);
    res.send("ERROR");
  }
};

module.exports = {
  getAllShowTimeList,
};
