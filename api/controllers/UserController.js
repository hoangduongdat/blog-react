const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserController {
  async update(req, res) {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json(updateUser);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  }
  async delete(req, res) {
    if (req.body.userId === req.params.id) {
      try {
        await User.deleteOne({ id: req.params.id })
        res.status(200).json("thanh cong");
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  }
}

module.exports = new UserController();
