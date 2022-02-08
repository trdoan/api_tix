"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket }) {
      // relationship with Ticket
      this.hasMany(Ticket, {
        allowNull: true,
        foreignKey: "movieId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
        as: "chiTietPhim",
      });
    }
  }
  Movie.init(
    {
      tenPhim: DataTypes.STRING,
      ngayKhoiChieu: DataTypes.DATE,
      thoiLuong: DataTypes.INTEGER,
      danhGia: DataTypes.FLOAT,
      poster: DataTypes.TEXT,
      trailer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
