const mongoose = require('mongoose');

const ContractDataSchema = new mongoose.Schema({
    address: String,
    data: [{}]
});

module.exports = mongoose.model('ContractData', ContractDataSchema);
