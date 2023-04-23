const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodaySchema = new Schema({
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

const Today = mongoose.model("Today", TodaySchema);

module.exports = Today;