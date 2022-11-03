const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
  {
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
    Like: {
      type: String,
    },
    Dislike: { type: String },
    userId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
