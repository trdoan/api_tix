"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
      name: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      type: DataTypes.TEXT,
      showtimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
