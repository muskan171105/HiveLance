// routes/userRoutes.js
const express = require('express');
const { createUser, getUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', createUser);
router.get('/:walletAddress', getUser);

module.exports = router;
