const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    address: String,
    balance: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Address', AddressSchema);
