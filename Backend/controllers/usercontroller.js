// controllers/userController.js
const User = require('../models/User');

// Register new user
const createUser = async (req, res) => {
  const { username, role, walletAddress } = req.body;

  try {
    const newUser = new User({ username, role, walletAddress });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', newUser });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
};

// Get user by wallet address
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ walletAddress: req.params.walletAddress });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
};

module.exports = { createUser, getUser };
