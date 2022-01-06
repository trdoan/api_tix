"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cineplex extends Model {
    static associate({ Cinema }) {
      // define association here
      this.hasMany(Cinema, {
        allowNull: true,
        foreignKey: "cineplexId",
        as: "cinemaList",
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  Cineplex.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cineplex",
    }
  );
  return Cineplex;
};
