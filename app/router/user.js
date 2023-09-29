const { UserController } = require("../http/controllers/user.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { imageValidator } = require("../http/validations/user");
const { uploadMulter } = require("../modules/multer");

const router = require("express").Router();

router.route("/profile").get(checkLogin, UserController.getProfile).post(checkLogin, UserController.editProfile);
router.post(
  "/profile-image",
  checkLogin,
  uploadMulter.single("image"),
  imageValidator(),
  expressValidatorMapper,
  UserController.uploadProfileImage
);

module.exports = {
  userRoutes: router,
};
