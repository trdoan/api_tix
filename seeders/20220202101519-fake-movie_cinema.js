"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Movie_Cinemas",
      [
        {
          movieId: 2000,
          cinemaId: 4000,
          createdAt: "2022-02-02",
          updatedAt: "2022-02-02",
        },
        {
          movieId: 2001,
          cinemaId: 4000,
          createdAt: "2022-02-02",
          updatedAt: "2022-02-02",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movie_Cinemas", null, {});
  },
};
