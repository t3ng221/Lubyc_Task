const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/todoapp";

mongoose.set("strictQuery", false);
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Database Connection Successful");
});

db.on("error", (error) => {
  console.log("DB Error:", error);
});

module.exports = mongoose;
