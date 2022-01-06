const { Movie } = require("./../../models");
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
module.exports = {
  findAllMovie,
  findDetailMovie,
};
