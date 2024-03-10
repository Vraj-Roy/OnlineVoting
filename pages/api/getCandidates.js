import connectDb from "@/middleware/db";
import Election from "@/models/Election";
const jwt = require("jsonwebtoken");

const getCandidates = async (req, res) => {
  await connectDb();
  let v = await Election.findOne({ election_name: "MSU" });
  let u = jwt.verify(req.body.token, "!@#DhoniMahiThala#@!");
  let E = await Election.findOne({ election_name: req.body.slug });
  let voters = [];
  voters = E.voters;

  function isKeyNotPresent(array, key) {
    return !array.includes(key);
  }
  isKeyNotPresent(voters, u.username);
  let unique = isKeyNotPresent(voters, u.username);
  if (u && E) {
    res.json({ success: true, can: E.candidates, unique: unique });
  }
  if (E) {
  }
};
export default getCandidates;
