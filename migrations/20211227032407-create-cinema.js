"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Cinemas",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        tenCumRap: {
          type: Sequelize.STRING,
        },
        diaChi: {
          type: Sequelize.STRING,
        },
        hinhAnh: {
          type: Sequelize.STRING,
        },
        cineplexId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Cineplexes",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
        initialAutoIncrement: 4000,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cinemas");
  },
};
