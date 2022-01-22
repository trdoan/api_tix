"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    static associate({ Cineplex, cinema_movie }) {
      this.belongsTo(Cineplex, {
        allowNull: true,
        foreignKey: "cineplexId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });

      this.hasMany(cinema_movie, {
        foreignKey: "cinemaId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Cinema.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      cineplexId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
