const express = require("express");
const router = express.Router();

const { GetAllTasks, AddNewTask } = require("../controller/taskController");

router.get("/all", GetAllTasks);
router.post("/post", AddNewTask);

module.exports = router;
