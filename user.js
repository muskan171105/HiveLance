// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  role: { type: String, enum: ['freelancer', 'client'], required: true },
  walletAddress: { type: String, required: true }, // Hive wallet address
  reputation: { type: Number, default: 0 }, // For dispute resolution voting
  skillNFTs: [String], // Store NFT IDs
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
