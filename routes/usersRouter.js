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

router.put("/feed", async (req, res) => {
  const selfGenres = req.body.genres;
  const userSpotifyId = req.body.spotifyId;
  try {
    const users = (await User.find()).map((user) => {
      const userObj = user.toObject();
      delete userObj.email;
      userObj.compatibility = computeCompatibility(selfGenres, user.genres);
      return userObj;
    });

    const filteredUsers = users.filter((user) => {
      return (
        user.spotifyId !== userSpotifyId &&
        !user.matches.includes(userSpotifyId) &&
        !user.liked.includes(userSpotifyId) &&
        !user.passed.includes(userSpotifyId)
      );
    });

    filteredUsers.sort((a, b) => b.compatibility - a.compatibility);

    res.json(filteredUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch("/matches", async (req, res) => {
  const userId = req.body.spotifyId;
  const otherId = req.body.otherSpotifyId;
  const isLike = req.body.isLike;

  try {
    const user = await User.findOne({ spotifyId: userId });
    const other = await User.findOne({ spotifyId: otherId });
    if (isLike) {
      if (other.liked.includes(user.spotifyId)) {
        user.matches.push(other.spotifyId);
        other.matches.push(user.spotifyId);
        other.liked = other.liked.filter((id) => id != user.spotifyId);
      } else {
        user.liked.push(other.spotifyId);
      }
    } else if (isLike === false) {
      user.passed.push(other.spotifyId);
    }
    const updatedUser = await user.save();
    const updatedOther = await other.save();
    res.json({ updatedUser, updatedOther });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/matches", async (req, res) => {
  const userSpotifyId = req.body.spotifyId;

  try {
    const [{ matches }] = await User.find(
      { spotifyId: userSpotifyId },
      "matches"
    ).exec();
    const matchedUsers = await Promise.all(
      matches.map((matchedUser) => {
        return User.find({ spotifyId: matchedUser });
      })
    );
    res.json(matchedUsers);
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

// router.patch("/", async (req, res) => {
//   const userData = req.body.user;

// })

module.exports = router;
