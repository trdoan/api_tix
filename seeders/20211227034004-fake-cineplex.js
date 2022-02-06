"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cineplexes",
      [
        {
          id: 3000,
          name: "BHD",
          logo:
            "https://www.bhdstar.vn/wp-content/uploads/2019/06/BHDStar_Logo_Tron.png",
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          id: 3001,
          name: "CGV",
          logo:
            " https://gigamall.com.vn/data/2019/05/06/11365490_logo-cgv-500x500.jpg",
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cineplexes", null, {});
  },
};
