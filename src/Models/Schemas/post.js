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
      type: Array,
      default: [],
    },
    like: {
      type: Array,
      default: [],
    },
    dislike: {
      type: Array,
      default: [],
    },
    userId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);
