const mongoose = require('mongoose');

const metricsSchema = new mongoose.Schema(
    {
        totalCounter: {
            type: Number,
            required: true
        },
        saturdaysCounter: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }

);

const Metrics = mongoose.model('Metrics', metricsSchema);

module.exports = Metrics;