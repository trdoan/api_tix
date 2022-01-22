const { Cinema, Movie, sequelize } = require("../../models");
const { cinema_movie } = require("../../models");

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
const findMoviesByCinema = async (req, res) => {
  // console.log(typeof +req.params.id);
  // const movieList = await cinema_movie.findAll({
  //   where: { cinemaId: req.params.id },

  //   include: [
  //     { model: Movie, attributes: ["name"], as: "movie_cinema", nest: true },
  //   ],
  // });
  const [results, metadata] = await sequelize.query(`
  select movies.id,movies.name,startDate,time,rate,poster,trailer from cinema_movies
  left join movies on cinema_movies.movieId = movies.id
  where cinema_movies.cinemaId = ${req.params.id};
  `);
  res.send(results);
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
  findMoviesByCinema,
};
