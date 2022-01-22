"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cinema_movies",
      [
        // BHD Star ID change when change env
        {
          cinemaId: 17,
          movieId: 19,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          cinemaId: 17,
          movieId: 20,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          cinemaId: 17,
          movieId: 21,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          cinemaId: 17,
          movieId: 22,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cinema_movies", null, {});
  },
};
