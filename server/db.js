require("dotenv").config();
const mongoose = require("mongoose");

const DbUri = process.env.MONGO_URI;

mongoose
  .connect(DbUri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));
