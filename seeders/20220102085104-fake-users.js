"use strict";

const { ROLE_USER_ADMIN, ROLE_USER_CLIENT } = require("../config");
var faker = require("faker");
faker.locale = "vi";
let arrUser = [];
[...new Array(68)].map(async (item) => {
  arrUser.push({
    hoTen: faker.name.findName(),
    email: faker.internet.email(),
    matKhau: "$2y$10$0bo.a7cQX0ba820EpytWxuublc.tdZYwBbhkGBsGyA3DJV5kiLkMC",
    soDT: faker.phone.phoneNumberFormat(),
    avatar:
      "https://res.cloudinary.com/depatula1/image/upload/v1644412546/avatar/fspbdxlw8oq4pts1zjzw.png",
    nhomQuyen: ROLE_USER_CLIENT,
    createdAt: "2022-02-02",
    updatedAt: "2022-02-02",
  });
});
const data = [
  {
    id: 1000,
    hoTen: "admin",
    email: "admin@gmail.com",
    matKhau: "$2y$10$0bo.a7cQX0ba820EpytWxuublc.tdZYwBbhkGBsGyA3DJV5kiLkMC",
    soDT: "00",
    avatar:
      "https://res.cloudinary.com/depatula1/image/upload/v1644412506/avatar/sjewjmsqme2m7ngtlzue.png",
    nhomQuyen: ROLE_USER_ADMIN,
    createdAt: "2022-02-02",
    updatedAt: "2022-02-02",
  },
  {
    id: 1001,
    hoTen: "client",
    email: "client@gmail.com",
    matKhau: "$2y$10$0bo.a7cQX0ba820EpytWxuublc.tdZYwBbhkGBsGyA3DJV5kiLkMC",
    soDT: "01",
    avatar:
      "https://res.cloudinary.com/depatula1/image/upload/v1644412546/avatar/fspbdxlw8oq4pts1zjzw.png",
    nhomQuyen: ROLE_USER_CLIENT,
    createdAt: "2022-02-02",
    updatedAt: "2022-02-02",
  },
].concat(arrUser);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
