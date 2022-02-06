"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Movies",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        tenPhim: {
          type: Sequelize.STRING,
        },
        ngayKhoiChieu: {
          type: Sequelize.DATE,
        },
        thoiLuong: {
          type: Sequelize.INTEGER,
        },
        danhGia: {
          type: Sequelize.FLOAT,
        },
        poster: {
          type: Sequelize.TEXT,
        },
        trailer: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        initialAutoIncrement: 2000,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Movies");
  },
};
