const { Movie, Show_Time, Cinema } = require("./../../models");

const findAllMovie = async (req, res) => {
  try {
    const movieList = await Movie.findAll();
    res.status(200).send({ data: movieList });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
};
const findDetailMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movieDetail = await Movie.findByPk(id);
    res.status(200).send({ data: movieDetail });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
};
const createMovie = async (req, res) => {
  const { test, email, matKhau } = req.body;

  res.send({ test, email, matKhau });
};
module.exports = {
  findAllMovie,
  findDetailMovie,
  createMovie,
};
