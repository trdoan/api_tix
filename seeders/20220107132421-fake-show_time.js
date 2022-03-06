"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Show_Times",
      [
        {
          id: 6000,
          gioChieu: "2022-07-07",
          cinemaId: 4000,
          movieId: 2000,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          id: 6001,
          gioChieu: "2022-07-08",
          cinemaId: 4000,
          movieId: 2001,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          id: 6002,
          gioChieu: "2022-07-08",
          cinemaId: 4001,
          movieId: 2001,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          id: 6003,
          gioChieu: "2022-07-08",
          cinemaId: 4002,
          movieId: 2001,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Show_Times", null, {});
  },
};
