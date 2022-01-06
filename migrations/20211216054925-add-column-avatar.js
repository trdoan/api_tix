"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("users", "avatar", {
      type: Sequelize.TEXT,
      defaultValue:
        "https://res.cloudinary.com/depatula1/image/upload/v1639634403/guwf0wtqyfpgvigv1m0f.jpg",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "avatar");
  },
};
