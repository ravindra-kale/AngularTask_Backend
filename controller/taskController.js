const { QueryListOfTask, QueryAddNewTask } = require("../service/taskService");

const GetAllTasks = async (req, res) => {
  const taskList = await QueryListOfTask();
  res.send(taskList);
};
const AddNewTask = async (req, res) => {
  const new_task = await QueryAddNewTask(req.body);
  return res.status(201).send(new_task);
};
module.exports = {
  GetAllTasks,
  AddNewTask,
};
