const express = require("express");
const router = express.Router();

const { GetAllTasks, AddNewTask } = require("../controller/taskController");

router.get("/get", GetAllTasks);
router.post("/post", AddNewTask);

module.exports = router;
