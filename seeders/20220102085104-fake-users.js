"use strict";

const { ROLE_USER_ADMIN, ROLE_USER_CLIENT } = require("../config");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1000,
          hoTen: "admin",
          email: "admin@gmail.com",
          matKhau: "",
          soDT: "00",
          nhomQuyen: ROLE_USER_ADMIN,
          createdAt: "2022-02-02",
          updatedAt: "2022-02-02",
        },
        {
          id: 1001,
          hoTen: "client",
          email: "client@gmail.com",
          matKhau: "",
          soDT: "01",
          nhomQuyen: ROLE_USER_CLIENT,
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
