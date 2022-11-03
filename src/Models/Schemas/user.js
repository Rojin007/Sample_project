const mongoose = require("mongoose");
const post = require("./post");
const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
