"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cinema_movie extends Model {
    static associate({ Cinema, Movie }) {
      this.belongsTo(Cinema, {
        allowNull: true,
        foreignKey: "cinemaId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
      this.belongsTo(Movie, {
        allowNull: true,
        foreignKey: "movieId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
        as: "movie_cinema",
      });
    }
  }
  cinema_movie.init(
    {
      cinemaId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cinema_movie",
    }
  );
  return cinema_movie;
};
