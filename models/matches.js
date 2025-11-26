const mongoose = require("mongoose");

// const unreadCountSchema = new mongoose.Schema({
//   user1_id: { type: Number, default: 0 },
//   user2_id: { type: Number, default: 0 },
// });

const matchesSchema = new mongoose.Schema({
  users: { type: [Object], required: true },
  matchedAt: { type: Date, default: Date.now },
  // compatabilityScore: { type: Number },
  // lastMessageAt: { type: Date, default: Date.now },
  // unreadCount: unreadCountSchema,
});
