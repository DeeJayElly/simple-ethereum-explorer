const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    address: String,
    data: [{}]
});

module.exports = mongoose.model('Transaction', TransactionSchema);
