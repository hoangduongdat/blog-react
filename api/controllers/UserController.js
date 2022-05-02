const User = require("../models/User");
const Post = require("../models/Post");
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
        }, { new: true });
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
        const user = await User.findById(req.body.userId);
        try {
          // delete all posts of user
          await Post.deleteMany({ username: user.username })
          //delete user
          // await User.deleteOne({ id: req.params.id })
          await User.findByIdAndDelete(req.body.userId)
          res.status(200).json("User has been deleted");
        } catch (err) {
          res.status(500).json(err);
        }
      } catch (err) {
        res.status(404).json("user not found");
      }
    } else {
      res.status(401).json(" You can delete only your account")
    }
  }
  // get user by id
  async getUser(req, res) {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }

  }
}

module.exports = new UserController();
