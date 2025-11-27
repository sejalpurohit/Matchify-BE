const express = require("express");
const router = express.Router();
const User = require("../models/user");
const computeCompatibility = require("../utils/computeCompatibility");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/feed", async (req, res) => {
  const selfGenres = req.body.genres;
  try {
    const users = await User.find();

    for (const user of users) {
      computeCompatibility(selfGenres, user.genres)
    }

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    spotifyId: req.body.spotifyId,
    displayName: req.body.displayName,
    email: req.body.email,
    profileImage: req.body.profileImage,
    profileSongs: req.body.profileSongs,
    genres: req.body.genres,
    matches: req.body.matches,
    liked: req.body.liked,
    passed: req.body.passed,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
