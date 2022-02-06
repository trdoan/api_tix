"use strict";

const data = [
  {
    id: 2000,
    name: "NGƯỜI NHỆN KHÔNG CÒN NHÀ",
    startDate: "2021-12-17",
    time: "149",
    rate: 7,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/n/snwh_poster_bluemontage_4x5fb_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    id: 2001,
    name: "HỐ SỤT TỬ THẦN",
    startDate: "2021-12-24",
    time: "117",
    rate: 8.5,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/h/s/hstt_main_poster_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    id: 2002,
    name: "MA TRẬN: HỒI SINH",
    startDate: "2021-12-24",
    time: "148",
    rate: 9,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_matrix_4_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    name: "VENOM: ĐỐI MẶT TỬ THÙ",
    startDate: "2021-12-19",
    time: "97",
    rate: 9,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/i…a251036189ccddaacd/p/o/poster_venom_121121_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Movies", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
