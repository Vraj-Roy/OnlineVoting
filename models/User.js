var mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { collection: "userdata" }
);

mongoose.models = {};
module.exports = mongoose.model("User", UserSchema);
