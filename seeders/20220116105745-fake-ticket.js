"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          userId: 1,
          movieId: 19,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          userId: 1,
          movieId: 20,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          userId: 1,
          movieId: 21,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          userId: 1,
          movieId: 22,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
