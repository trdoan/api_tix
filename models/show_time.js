"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Show_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema, Seat }) {
      // define association here
      this.belongsTo(Cinema, {
        foreignKey: "cinemaId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
      this.hasMany(Seat, {
        foreignKey: "showtimeId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  Show_Time.init(
    {
      startTime: DataTypes.DATE,
      cinemaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Show_Time",
    }
  );
  return Show_Time;
};
