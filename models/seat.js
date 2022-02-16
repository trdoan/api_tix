"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate({ Show_Time }) {
      // define association here
      this.belongsTo(Show_Time, {
        foreignKey: "showtimeId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Seat.init(
    {
      tenGhe: DataTypes.TEXT,
      daDat: DataTypes.BOOLEAN,
      giaGhe: DataTypes.INTEGER,
      loaiGhe: DataTypes.TEXT,
      showtimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
