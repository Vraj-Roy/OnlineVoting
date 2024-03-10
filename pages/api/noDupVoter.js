import connectDb from "@/middleware/db";
import Election from "@/models/Election";
const jwt = require("jsonwebtoken");

const NoDupVoter = async (req, res) => {
  let u = jwt.verify(req.body.token, "!@#DhoniMahiThala#@!");

  await connectDb();
  
  let E = await Election.findOne({ election_name: req.body.slug });
  function isValuePresent(array, value) {
    // Use the includes() method to check if the value is present in the array
    return array.includes(value);
  }

  // Example usage:

  //   console.log(); // Output: true
  res.json({ dup: isValuePresent(E.voters, u.username) });
};
export default NoDupVoter;
