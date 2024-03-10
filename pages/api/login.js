import User from "../../models/User";
import connectDb from "./../../middleware/db";
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  if (req.method == "POST") {
    await connectDb();
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      let b = bcrypt.compareSync(req.body.password, user.password);
      if (b) {
        var token = jwt.sign(
          { username: req.body.username },
          "!@#DhoniMahiThala#@!"
        );
        res.json({ success: true, token });
      } else {
        res.json({ success: false });
      }
    } else {
      res.json({ success: false });
    }
  }
};
export default login;
// if(method==)
//
