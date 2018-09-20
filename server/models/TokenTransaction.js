const mongoose = require('mongoose');

const TokenTransactionSchema = new mongoose.Schema({
    address: String,
    data: [{}]
});

module.exports = mongoose.model('TokenTransaction', TokenTransactionSchema);
