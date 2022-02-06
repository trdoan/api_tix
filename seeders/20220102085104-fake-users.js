"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1000,
          name: "admin",
          email: "admin@gmail.com",
          password: "",
          phone: "00",
          role: "ADMIN",
          createdAt: "2022-02-02",
          updatedAt: "2022-02-02",
        },
        {
          id: 1001,
          name: "client",
          email: "client@gmail.com",
          password: "",
          phone: "01",
          role: "CLIENT",
          createdAt: "2022-02-02",
          updatedAt: "2022-02-02",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
