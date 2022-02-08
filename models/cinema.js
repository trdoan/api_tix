"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    static associate({ Cineplex, Show_Time }) {
      this.belongsTo(Cineplex, {
        allowNull: true,
        foreignKey: "cineplexId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });

      this.hasMany(Show_Time, {
        foreignKey: "cinemaId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Cinema.init(
    {
      tenCumRap: DataTypes.STRING,
      diaChi: DataTypes.STRING,
      hinhAnh: DataTypes.STRING,
      cineplexId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
