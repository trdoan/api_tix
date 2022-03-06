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
        as: "lichChieu",
      });
    }
  }
  Cinema.init(
    {
      tenCumRap: DataTypes.STRING,
      diaChi: DataTypes.STRING,
      hinhAnh: {
        type: DataTypes.STRING,
        defaultValue:
          "https://gigamall.com.vn/data/2019/05/06/11365490_logo-cgv-500x500.jpg",
      },
      cineplexId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
