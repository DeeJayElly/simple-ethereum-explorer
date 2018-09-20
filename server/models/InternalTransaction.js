const mongoose = require('mongoose');

const InternalTransactionSchema = new mongoose.Schema({
    address: String,
    data: [{}]
});

module.exports = mongoose.model('InternalTransaction', InternalTransactionSchema);
