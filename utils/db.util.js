// external import
const mongoose = require("mongoose");

// DB connect with Mongoose
function dbConnection() {
  mongoose
    .connect("mongodb://localhost:27017/file-upload", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connect Mongoose with MongoDB.");
    });
}

module.exports = dbConnection;
