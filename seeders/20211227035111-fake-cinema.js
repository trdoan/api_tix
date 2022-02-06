"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Cinemas",
      [
        {
          id: 4000,
          name: "BHD STAR LÊ VĂN VIỆT",
          address:
            "Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM",
          image:
            "https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV-243x330.jpg",
          cineplexId: 3000,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          id: 4001,
          name: "BHD STAR 3/2",
          address:
            "Tầng 5, Vincom Plaza 3/2, 3C Đường 3 Tháng 2, P.11, Quận 10, TPHCM",
          image:
            "https://www.bhdstar.vn/wp-content/uploads/2010/08/3.2-243x330.jpg",
          cineplexId: 3000,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          id: 4002,
          name: "CGV Hùng Vương Plaza",
          address:
            "Tầng 7, Hùng Vương Plaza, 126 Hùng Vương, Q.5, Tp. Hồ Chí Minh",
          image: "",
          cineplexId: 3001,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
        {
          id: 4003,
          name: "CGV Vincom Thủ Đức",
          address:
            "Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, P. Bình Thọ, Q. Thủ Đức, Tp. Hồ Chí Minh",
          image: "",
          cineplexId: 3001,
          createdAt: "2021-12-27",
          updatedAt: "2021-12-27",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
