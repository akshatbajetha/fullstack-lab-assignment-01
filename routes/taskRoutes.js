const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.route("/")
    .get(taskController.getAllTask)
    .post(taskController.createTask);

router.route("/:id")
    .get(taskController.getOneTask)
    // .patch(taskController.updateTask) - Create Patch Method in Controller
    // .delete(taskController.deleteTask); - Create Delete Method in Controller

module.exports = router;