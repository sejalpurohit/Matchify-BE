const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  spotifyId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },

  profileSongs: {
    type: [
      {
        trackId: {
          type: String,
          required: true,
        },
        trackName: {
          type: String,
          required: true,
        },
        artistName: {
          type: String,
          required: true,
        },
        albumArt: {
          type: String,
          required: true,
        },
        previewUrl: {
          type: String,
          required: true,
        },
        addedAt: {
          type: Date,
          default: Date.now,
          required: true,
        },
      },
    ],
    minlength: 5,
    maxlength: 5,
  },
});

module.exports = mongoose.model("User", userSchema);
