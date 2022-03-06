const { Cinema, Movie, sequelize } = require("../../models");
const { Movie_Cinema } = require("../../models");

const findCinema = async (req, res) => {
  try {
    const { id } = req.params;
    let data;
    if (id) {
      data = await Cinema.findAll({
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
const findMoviesByCinema = async (req, res) => {
  const { id } = req.params;
  try {
    const temp = await Movie_Cinema.findAll({
      where: {
        cinemaId: id,
      },
      include: "Movie",
    });
    const data = JSON.stringify(temp, null, 2);
    const movieList = temp.map((movie) => {
      return movie.Movie;
    });
    // console.log(movieList);
    res.send(movieList);
  } catch (error) {
    res.send("error");
    console.log(error);
  }
};
const createCinema = async (req, res) => {
  try {
    const { tenCumRap, diaChi, hinhAnh, cineplexId } = req.body;
    const cinemaItem = await Cinema.create({
      tenCumRap,
      diaChi,
      hinhAnh,
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
// add danh sash phim cho cuum rap
const addMovieCinema = async (req, res) => {
  const temp = await Cinema.findAll({
    include: Movie_Cinema,
  });
  console.log(temp);
  res.send("thaanh cong");
};
module.exports = {
  findCinema,
  createCinema,
  updateCinema,
  deleteCinema,
  findMoviesByCinema,
  addMovieCinema,
};
