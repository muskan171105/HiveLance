// services/hiveService.js
const hive = require('@hiveio/hive-js');

// Broadcast a transaction to Hive Blockchain
const broadcastTransaction = async (privateKey, transaction) => {
  try {
    const result = await hive.broadcast.customJsonAsync(
      privateKey,
      [], // Required authorities
      [], // Required posting authorities
      transaction
    );
    return result;
  } catch (err) {
    throw new Error('Error broadcasting transaction');
  }
};

module.exports = { broadcastTransaction };
