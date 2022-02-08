"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tickets",
      [
        {
          userId: 1000,
          movieId: 2000,
          showtimeId: 6000,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          userId: 1000,
          movieId: 2001,
          showtimeId: 6001,
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
