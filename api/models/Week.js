const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeekSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
    },
    timestamp: {
        type: String,
        default: Date.now()
    },
});

const Week = mongoose.model("Week", WeekSchema);

module.exports = Week;