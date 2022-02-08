"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, User, Show_Time }) {
      // define association here
      this.belongsTo(User, {
        allowNull: true,
        foreignKey: "userId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
        as: "nguoiMua",
      });
      this.belongsTo(Movie, {
        allowNull: true,
        foreignKey: "movieId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
        as: "chiTietPhim",
      });
      this.belongsTo(Show_Time, {
        allowNull: true,
        foreignKey: "showtimeId",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
        as: "diaDiem",
      });
    }
  }
  Ticket.init(
    {
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      showtimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
