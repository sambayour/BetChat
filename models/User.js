const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String},
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean, 
      default: false,
    },
    intrest: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
