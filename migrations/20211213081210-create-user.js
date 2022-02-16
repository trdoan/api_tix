"use strict";

const { ROLE_USER_CLIENT, AVATAR_USER_DEFAUT } = require("../config");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        hoTen: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
        },
        matKhau: {
          type: Sequelize.STRING,
        },
        avatar: {
          type: Sequelize.TEXT,
          defaultValue: AVATAR_USER_DEFAUT,
        },
        soDT: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        nhomQuyen: {
          type: Sequelize.STRING,
          defaultValue: ROLE_USER_CLIENT,
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
        initialAutoIncrement: 1000,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
