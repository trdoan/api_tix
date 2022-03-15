const multer = require("multer");
require("dotenv").config();
var cloudinary = require("cloudinary").v2;
const processByMulter = (key) => {
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  const upload = multer({ storage });
  return upload.single(key);
};
const saveToCloudinary = (key) => async (req, res, next) => {
  try {
    const { path } = req.file;
    const resCloud = await cloudinary.uploader.upload(path, {
      folder: key,
    });
    req.linkImage = resCloud.url;
    next();
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Không tìm thấy hình ảnh" });
  }
};
module.exports = {
  processByMulter,
  saveToCloudinary,
};
