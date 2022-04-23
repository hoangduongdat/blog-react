const bcrypt = require("bcrypt");
const User = require("../models/User");
class AuthController {
  //[post] /api/auth/register
  async register(req, res) {
    console.log(123)

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  // [post] /api/auth/logind

  async login(req, res) {
    try {
      const user = await User.findOne({ username: req.body.username }).exec();
      !user && res.status(400).json("Wrong credentials1");

      const validdated = await bcrypt.compare(req.body.password, user.password);

      !validdated && res.status(400).json("Wrong credentials2");

      if (validdated) {
        const { password, ...others } = user._doc;
        res.status(200).json(others);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new AuthController();
