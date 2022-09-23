// external import
const mongoose = require("mongoose");

// DB connect with Mongoose
function dbConnection() {
  mongoose
    .connect(
      "mongodb+srv://Tour_Management_System:2a7f3b0d38c318df@tms.o7mokk2.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "file-upload",
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(() => {
      console.log("Successfully connect Mongoose with MongoDB.");
    });
}

module.exports = dbConnection;
