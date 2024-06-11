const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        enum: ['Daily', 'Weekly', 'Monthly'],
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    completedDates: {
        type: [Date],
        default: []
    }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
