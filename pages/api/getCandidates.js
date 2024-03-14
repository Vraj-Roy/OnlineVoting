import connectDb from "@/middleware/db";
import Election from "@/models/Election";
const jwt = require("jsonwebtoken");

const getCandidates = async (req, res) => {
  await connectDb();
  if (!req.body.token) {
    return res.json({ success: false, message: "no token" });
  }
  let u = jwt.verify(req.body.token, "!@#DhoniMahiThala#@!");
  let E = await Election.findOne({ election_name: req.body.slug });
  let voters = [];
  E ? (voters = E.voters) : "";

  function isKeyNotPresent(array, key) {
    return !array.includes(key);
  }
  isKeyNotPresent(voters, u.username);
  let unique = isKeyNotPresent(voters, u.username);
  if (u && E) {
    res.json({ success: true, can: E.candidates, unique: unique });
  } else {
    res.json({ success: false, message: "some error" });
  }
};
export default getCandidates;
