const { Router } = require("express");

const { User } = require("../../models");
const {
  findAll,
  findDetail,
  create,
  update,
  remove,
  uploadAvatar,
} = require("../controllers/users.controller");
const {
  authenticate,
  authorize,
  checkUserExist,
} = require("../middlewares/auth/verify-token.middleware");
const {
  checkExists,
  checkFieldsValid,
  checkErrorRequest,
} = require("../middlewares/common.middleware");
const {
  processByMulter,
  saveToCloudinary,
} = require("../middlewares/upload/upload-image.middleware");
const { checkUniqueFields } = require("../middlewares/user.middleware");
const userRouter = Router();

userRouter.get("/", findAll);
userRouter.get(
  "/:id",
  checkFieldsValid("/:id"),
  checkErrorRequest,
  checkExists(User),
  findDetail
);
userRouter.post(
  "/",
  checkFieldsValid("/taoNguoiDung"),
  checkErrorRequest,
  authenticate,
  checkExists(User),
  authorize(["QUANTRI"]),
  checkUniqueFields,
  create
);
userRouter.put(
  "/:id",
  checkFieldsValid("/capNhatNguoiDung"),
  checkErrorRequest,
  authenticate,
  checkExists(User),
  update
);
userRouter.delete(
  "/:id",
  authenticate,
  checkExists(User),
  authorize(["QUANTRI"]),
  remove
);
userRouter.post(
  "/upload-avatar",
  [authenticate, processByMulter("avatar"), saveToCloudinary("avatar")],
  uploadAvatar
);
module.exports = { userRouter };
