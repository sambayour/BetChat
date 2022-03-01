const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String, required: true },
    categories: { type: Array },
    user_id: { type: Number, required: true },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
