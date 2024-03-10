var mongoose = require("mongoose");

const ElectionSchema = mongoose.Schema(
  {
    election_name: { type: String },
    candidates: { type: Array },
    votes: { type: Array },
    logo: { type: String },
    voters: { type: Array, unique: true },
  },
  { collection: "elections" }
);

mongoose.models = {};
module.exports = mongoose.model("Election", ElectionSchema);
