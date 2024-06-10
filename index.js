const express = require("express");
const todoRoutes = require("./backend/routes/route");
const bodyParser = require("body-parser");
require("./backend/db/mongo");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", todoRoutes);
const server = app.listen(5000, () => {
  console.log("Server is Running on port 5000");
});
module.exports = server;
