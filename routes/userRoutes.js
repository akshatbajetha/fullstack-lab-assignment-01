const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(userController.createUser).get(userController.getAllUsers);
router.route("/signup/:username").get(userController.getUserByUsername);
router.route("/delete/:username").delete(userController.deleteUserByUsername);

module.exports = router;