const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(userController.createUser)
router.route("/users").get(userController.getAllUsers);
router.route("/users/:username").get(userController.getUserByUsername);
router.route("/delete/:username").delete(userController.deleteUserByUsername);

module.exports = router;