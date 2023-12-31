const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true},
    desc: { type: String, max: 500, default: ""},
    img: { type: String, default: "" },
    likes: { type: Array, default: [] },
    shares: { type: Number, default: 0}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
