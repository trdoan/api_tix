"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Seats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tenGhe: {
        type: Sequelize.TEXT,
      },
      daDat: {
        type: Sequelize.BOOLEAN,
      },
      giaGhe: {
        type: Sequelize.INTEGER,
      },
      loaiGhe: {
        type: Sequelize.TEXT,
      },
      showtimeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Show_Times",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Seats");
  },
};
