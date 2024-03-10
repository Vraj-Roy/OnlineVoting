import User from "../../models/User";
import connectDb from "./../../middleware/db";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
  if (req.method == "POST") {
    await connectDb();
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    // let userN = await User.findOne({
    //   username: req.body.username,
    //   email: req.body.email,
    // });
    // let userE = await User.findOne({ email: req.body.email });
    let Unq = User.find({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });
    if (!Unq) {
      let U = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      await U.save();
      var token = jwt.sign(
        { username: req.body.username },
        "!@#DhoniMahiThala#@!"
      );
      res.json({ success: true, token });
    } else {
      res.json({ success: false });
    }
  }
};
export default Signup;
// if(method==)
