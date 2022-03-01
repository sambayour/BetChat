const User = require("../models/User");
const {
  verifyToken,
} = require("./verifyToken");

const router = require("express").Router();

router.get("/:id", verifyToken, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
