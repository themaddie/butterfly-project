const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonthSchema = new Schema({
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
    icon: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    },
});

const Month = mongoose.model("Month", MonthSchema);

module.exports = Month;