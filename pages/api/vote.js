import connectDb from "@/middleware/db";
import Election from "@/models/Election";
const jwt = require("jsonwebtoken");

const Vote = async (req, res) => {
  try {
    await connectDb();

    // Find the election by slug
    let v = await Election.findOne({ election_name: req.body.slug });

    // Verify the JWT token
    let u = jwt.verify(req.body.token, "!@#DhoniMahiThala#@!");

    // Increment the vote value
    let v_value = v.votes[req.body.i] + 1;

    // Update the election document
    let E = await Election.findOneAndUpdate(
      { election_name: req.body.slug },
      {
        $push: { voters: u.username },
        $set: { [`votes.${req.body.i}`]: v_value }, // Corrected syntax for dynamic key
      },
      { new: true }
    );

    // Send response based on the success of the update
    if (E) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error("Error in Vote:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export default Vote;
