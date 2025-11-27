const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  trackId: { type: String, required: true },
  trackName: { type: String, required: true },
  artistName: { type: String, required: true },
  albumArt: { type: String, required: true },
  previewUrl: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  spotifyId: { type: String, required: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  profileImage: { type: String, required: true },
  profileSongs: [trackSchema],
  genres: { type: [String], required: true },
  matches: [String],
  liked: [String],
  passed: [String],
});

module.exports = mongoose.model("User", userSchema);
