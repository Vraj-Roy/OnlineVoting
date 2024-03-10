import connectDb from "@/middleware/db";
import Election from "@/models/Election";
const jwt = require("jsonwebtoken");

const Vote = async (req, res) => {
  await connectDb();
  let v = await Election.findOne({ election_name: "MSU" });
  let u = jwt.verify(req.body.token, "!@#DhoniMahiThala#@!");

  let v_new_arr = v.votes[req.body.i] + 1;
  let E = await Election.findOneAndUpdate(
    { election_name: req.body.slug },
    {
      $push: { voters: u.username },
      $set: { [`votes.${req.body.i}`]: v_new_arr },
    },
    { new: true }
  );
  if (E) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
};
export default Vote;
