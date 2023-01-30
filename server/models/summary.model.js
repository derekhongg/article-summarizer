const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "First name is required"]
    },
    summary: {
        type: String,
        required: [true, "Last name is required"]
    },
}, {timestamps: true});

const Summary= mongoose.model('Summary', SummarySchema);
module.exports = Summary;