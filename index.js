const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const corsOptions = { origin: "*" };
const taskRoutes = require("./routes/routesTask");
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/task", taskRoutes);

try {
  app.listen(port, () => {
    console.log("app listning on http://localhost:" + port);
  });
} catch (error) {
  console.log(error);
}
