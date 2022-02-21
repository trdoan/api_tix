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
  checkName,
  checkExists,
  checkEmail,
} = require("../middlewares/user.middleware");
const userRouter = Router();
userRouter.post(
  "/upload-avatar",
  [authenticate, processByMulter("avatar"), saveToCloudinary("avatar")],
  uploadAvatar
);
userRouter.get("/", findAll);
userRouter.get("/:id", checkExists(User), findDetail);
userRouter.post("/", checkEmail, authenticate, authorize(["QUANTRI"]), create);
userRouter.put("/:id", authenticate, checkExists(User), checkName, update);
userRouter.delete(
  "/:id",
  authenticate,
  authorize(["QUANTRI"]),
  checkExists(User),
  remove
);
module.exports = { userRouter };
