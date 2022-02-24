"use strict";

const data = [
  {
    id: 2000,
    tenPhim: "NGƯỜI NHỆN KHÔNG CÒN NHÀ",
    ngayKhoiChieu: "2021-12-17",
    thoiLuong: "149",
    danhGia: 7,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/n/snwh_poster_bluemontage_4x5fb_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    id: 2001,
    tenPhim: "HỐ SỤT TỬ THẦN",
    ngayKhoiChieu: "2021-12-24",
    thoiLuong: "117",
    danhGia: 8.5,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/h/s/hstt_main_poster_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    id: 2002,
    tenPhim: "MA TRẬN: HỒI SINH",
    ngayKhoiChieu: "2021-12-24",
    thoiLuong: "148",
    danhGia: 9,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_matrix_4_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    tenPhim: "VENOM: ĐỐI MẶT TỬ THÙ",
    ngayKhoiChieu: "2021-12-19",
    thoiLuong: "97",
    danhGia: 9,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/i…a251036189ccddaacd/p/o/poster_venom_121121_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=T36HGZagV5w",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    tenPhim: "BẪY NGỌT NGÀO",
    ngayKhoiChieu: "2021-12-19",
    thoiLuong: "90",
    danhGia: 9,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/b/n/bnn-new-year-poster-2022_1_.jpg",
    trailer: "https://www.youtube.com/watch?v=8n5Xmnd1iS4",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    tenPhim: "TRĂNG RƠI",
    ngayKhoiChieu: "2021-12-19",
    thoiLuong: "90",
    danhGia: 9,
    poster:
      "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/o/moonfall-revised_poster-vietnam_3.jpg",
    trailer: "https://www.youtube.com/watch?v=8n5Xmnd1iS4",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    tenPhim: "TRĂNG RƠI",
    ngayKhoiChieu: "2021-12-19",
    thoiLuong: "90",
    danhGia: 9,
    poster:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002274?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    trailer: "https://www.youtube.com/watch?v=8n5Xmnd1iS4",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    tenPhim: "CHÌA KHÓA TRĂM TỶ",
    ngayKhoiChieu: "2021-12-19",
    thoiLuong: "90",
    danhGia: 9,
    poster:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002358?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    trailer: "https://www.youtube.com/watch?v=8n5Xmnd1iS4",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    tenPhim: "ENCANTO",
    ngayKhoiChieu: "2021-12-19",
    thoiLuong: "90",
    danhGia: 9,
    poster:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002360?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    trailer: "https://www.youtube.com/watch?v=8n5Xmnd1iS4",
    createdAt: "2021-12-27",
    updatedAt: "2021-12-27",
  },
  {
    tenPhim: "NHÀ KHÔNG BÁN",
    ngayKhoiChieu: "2021-12-19",
    thoiLuong: "90",
    danhGia: 9,
    poster:
      "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002365?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    trailer: "https://www.youtube.com/watch?v=8n5Xmnd1iS4",
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
