const UsersRouter = require("../../routes/usersRouter");
const express = require("express");
const User = require("../../models/user");
const UsersData = require("../../mockData");
const request = require("supertest");

let app;

beforeEach(async () => {
  app = express();
  app.use(express.json());
  app.use("/users", UsersRouter);

  await User.insertMany(UsersData);
});

describe("PUT users/feed", () => {
  it("should return filtered users with compatibility score", async () => {
    const selfSpotifyId = UsersData[0].spotifyId;
    const res = await request(app)
      .put("/users/feed")
      .send({
        spotifyId: selfSpotifyId,
        genres: ["pop", "dance pop"],
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("compatibility");
    expect(res.body[0].spotifyId).not.toBe(selfSpotifyId);
  });
});

describe("PUT /users/matches", () => {
  it("should return matched users", async () => {
    const userId = UsersData[0].spotifyId;

    await User.updateOne(
      { spotifyId: userId },
      { $set: { matches: [UsersData[1].spotifyId] } }
    );

    const res = await request(app)
      .put("/users/matches")
      .send({ spotifyId: userId });

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].spotifyId).toBe(UsersData[1].spotifyId);
  });
});
describe("POST /users", () => {
  it("should update an existing user", async () => {
    const existing = UsersData[0];

    const res = await request(app).post("/users").send({
      spotifyId: existing.spotifyId,
      displayName: "Updated Name",
      email: "updated@test.com",
      profileImage: "newimg.jpg",
      genres: existing.genres,
    });

    expect(res.statusCode).toBe(200);

    const updated = await User.findOne({ spotifyId: existing.spotifyId });
    expect(updated.displayName).toBe("Updated Name");
    expect(updated.email).toBe("updated@test.com");
  });

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({
        spotifyId: "NEW123",
        displayName: "New User",
        email: "new@example.com",
        profileImage: "img.jpg",
        genres: ["pop"],
      });

    expect(res.statusCode).toBe(201);

    const created = await User.findOne({ spotifyId: "NEW123" });
    expect(created).not.toBeNull();
    expect(created.displayName).toBe("New User");
  });
});
