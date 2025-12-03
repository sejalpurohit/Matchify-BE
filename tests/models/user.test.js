const User = require("../../models/user");

describe("User Model", () => {
  it("should create a user successfully", async () => {
    const user = await User.create({
      spotifyId: "test001",
      displayName: "Test User",
      email: "test@example.com",
      profileImage: "https://picsum.photos/200",
      genres: ["pop", "rock"],
      matches: [],
      liked: [],
      passed: [],
      profileSongs: [
        {
          trackId: "t001",
          trackName: "Song 1",
          artistName: "Artist 1",
          albumArt: "https://picsum.photos/300",
        },
        {
          trackId: "t002",
          trackName: "Song 2",
          artistName: "Artist 2",
          albumArt: "https://picsum.photos/300",
        },
        {
          trackId: "t003",
          trackName: "Song 3",
          artistName: "Artist 3",
          albumArt: "https://picsum.photos/300",
        },
        {
          trackId: "t004",
          trackName: "Song 4",
          artistName: "Artist 4",
          albumArt: "https://picsum.photos/300",
        },
        {
          trackId: "t005",
          trackName: "Song 5",
          artistName: "Artist 5",
          albumArt: "https://picsum.photos/300",
        },
      ],
      isBot: true,
    });

    expect(user.spotifyId).toBe("test001");
    expect(user.profileSongs.length).toBe(5);
  });

  it("should fail without required fields", async () => {
    let error;
    try {
      await User.create({ displayName: "No Spotify ID" });
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  });
});
