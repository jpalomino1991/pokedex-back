const mongoose = require('mongoose');

const attackSchema = new mongoose.Schema({
    name: String,
    type: String,
    category: String,
    power: String,
    accuracy: String,
    pp: String,
    tm: String,
    effect: String
});

module.exports = mongoose.model('Attack', attackSchema);