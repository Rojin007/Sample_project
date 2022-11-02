const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  id: { type: String },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  comment: {
    type: String,
  },
  Impression: {
    like: String,
    dislike: String,
  },
  userId: { type: String },
});

module.exports = mongoose.model("post", postSchema);
