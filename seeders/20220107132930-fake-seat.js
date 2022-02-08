"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Seats",
      [
        {
          tenGhe: "01",
          daDat: false,
          giaGhe: 70000,
          loaiGhe: "THUONG",
          showtimeId: 6000,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          tenGhe: "02",
          daDat: false,
          giaGhe: 70000,
          loaiGhe: "THUONG",
          showtimeId: 6000,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          tenGhe: "03",
          daDat: true,
          giaGhe: 90000,
          loaiGhe: "VIP",
          showtimeId: 6000,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          tenGhe: "01",
          daDat: false,
          giaGhe: 70000,
          loaiGhe: "THUONG",
          showtimeId: 6000,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          tenGhe: "02",
          daDat: false,
          giaGhe: 70000,
          loaiGhe: "THUONG",
          showtimeId: 6000,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
        {
          tenGhe: "03",
          daDat: false,
          giaGhe: 90000,
          loaiGhe: "VIP",
          showtimeId: 6000,
          createdAt: "2022-07-07",
          updatedAt: "2022-07-07",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Seats", null, {});
  },
};
