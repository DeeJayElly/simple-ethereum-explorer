const Counter = require('../../models/Counter');
const Address = require('../../models/Address');
const Transaction = require('../../models/Transaction');
const InternalTransaction = require('../../models/InternalTransaction');
const TokenTransaction = require('../../models/TokenTransaction');
const ContractData = require('../../models/ContractData');

module.exports = (app) => {
    app.get('/api/address', (req, res, next) => {
        Address.find()
            .exec()
            .then((address) => res.json(address))
            .catch((err) => next(err));
    });

    app.post('/api/address', function (req, res, next) {
        let query = {address: req.body.address};
        Address.findOneAndUpdate(
            query,
            {
                address: req.body.address,
                balance: req.body.balance
            },
            {
                upsert: true,
                new: true,
                overwrite: true
            }
        )
            .exec()
            .catch((err) => next(err));
    });

    app.post('/api/addressTransaction', function (req, res, next) {
        let query = {address: req.body.address};
        Transaction.findOneAndUpdate(
            query,
            {
                address: req.body.address,
                data: req.body.data
            },
            {
                upsert: true,
                new: true,
                overwrite: true
            }
        )
            .exec()
            .then(() => {
                Transaction.find(query)
                    .exec()
                    .then((transactions) => res.json(transactions))
                    .catch((err) => next(err));
            }).catch((err) => next(err));
    });

    app.post('/api/addressInternalTransaction', function (req, res, next) {
        let query = {address: req.body.address};
        InternalTransaction.findOneAndUpdate(
            query,
            {
                address: req.body.address,
                data: req.body.data
            },
            {
                upsert: true,
                new: true,
                overwrite: true
            }
        )
            .exec()
            .then(() => {
                InternalTransaction.find(query)
                    .exec()
                    .then((transactions) => res.json(transactions))
                    .catch((err) => next(err));
            }).catch((err) => next(err));
    });

    app.post('/api/addressTokenTransaction', function (req, res, next) {
        let query = {address: req.body.address};
        TokenTransaction.findOneAndUpdate(
            query,
            {
                address: req.body.address,
                data: req.body.data
            },
            {
                upsert: true,
                new: true,
                overwrite: true
            }
        )
            .exec()
            .then(() => {
                TokenTransaction.find(query)
                    .exec()
                    .then((transactions) => res.json(transactions))
                    .catch((err) => next(err));
            }).catch((err) => next(err));
    });

    app.post('/api/contractData', function (req, res, next) {
        let query = {address: req.body.address};
        ContractData.findOneAndUpdate(
            query,
            {
                address: req.body.address,
                data: req.body.data
            },
            {
                upsert: true,
                new: true,
                overwrite: true
            }
        )
            .exec()
            .then(() => {
                ContractData.find(query)
                    .exec()
                    .then((transactions) => res.json(transactions))
                    .catch((err) => next(err));
            }).catch((err) => next(err));
    });

    app.get('/api/counters', (req, res, next) => {
        Counter.find()
            .exec()
            .then((counter) => res.json(counter))
            .catch((err) => next(err));
    });

    app.post('/api/counters', function (req, res, next) {
        const counter = new Counter();

        counter.save()
            .then(() => res.json(counter))
            .catch((err) => next(err));
    });

    app.delete('/api/counters/:id', function (req, res, next) {
        Counter.findOneAndRemove({_id: req.params.id})
            .exec()
            .then((counter) => res.json())
            .catch((err) => next(err));
    });

    app.put('/api/counters/:id/increment', (req, res, next) => {
        Counter.findById(req.params.id)
            .exec()
            .then((counter) => {
                counter.count++;

                counter.save()
                    .then(() => res.json(counter))
                    .catch((err) => next(err));
            })
            .catch((err) => next(err));
    });

    app.put('/api/counters/:id/decrement', (req, res, next) => {
        Counter.findById(req.params.id)
            .exec()
            .then((counter) => {
                counter.count--;

                counter.save()
                    .then(() => res.json(counter))
                    .catch((err) => next(err));
            })
            .catch((err) => next(err));
    });
};
