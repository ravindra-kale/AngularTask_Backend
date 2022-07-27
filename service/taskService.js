const connection = require("../database/connection");

const QueryListOfTask = () => {
  try {
    // connection.query(`SELECT * FROM Task`, (err, result, fields) => {
    //   if (err) throw err;
    //   console.log(result);
    //   res.send(result);
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM Task", (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
    // });
  } catch (error) {
    return error;
  }
};
const QueryAddNewTask = (body) => {
  try {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO Task set ?`, body, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  } catch (error) {
    return error;
  }
};
module.exports = {
  QueryAddNewTask,
  QueryListOfTask,
};
