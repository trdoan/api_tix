const multer = require("multer");
require("dotenv").config();
var cloudinary = require("cloudinary").v2;
const processByMulter = (keyRequest) => {
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  const upload = multer({ storage });
  return upload.single(keyRequest);
};
const saveToCloudinary = (key) => async (req, res, next) => {
  let path, avatar;
  try {
    if (req.file) {
      path = req.file.path;
    } else {
      avatar = req.body.avatar;
    }
    const resCloud = await cloudinary.uploader.upload(avatar || path, {
      folder: key,
    });
    req.linkImage = resCloud.url;
    next();
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Image not found" });
  }
};
module.exports = {
  processByMulter,
  saveToCloudinary,
};
