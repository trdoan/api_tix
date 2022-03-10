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
} = require("../middlewares/auth/verify-token.middleware");
const {
  processByMulter,
  saveToCloudinary,
} = require("../middlewares/upload/upload-image.middleware");
const {
  checkExists,
  checkEmail,
  checkUniqueFields,
} = require("../middlewares/user.middleware");
const userRouter = Router();

userRouter.get("/", findAll);
userRouter.get("/:id", checkExists(User), findDetail);
userRouter.post(
  "/",
  // checkEmail, authenticate, authorize(["QUANTRI"])
  checkUniqueFields,
  create
);
userRouter.put("/:id", authenticate, checkExists(User), update);
userRouter.delete(
  "/:id",
  authenticate,
  authorize(["QUANTRI"]),
  checkExists(User),
  remove
);
userRouter.post(
  "/upload-avatar",
  [authenticate, processByMulter("avatar"), saveToCloudinary("avatar")],
  uploadAvatar
);
module.exports = { userRouter };
