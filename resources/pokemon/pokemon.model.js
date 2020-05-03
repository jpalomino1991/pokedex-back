const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    type1: String,
    type2: String,
    species: String,
    height: String,
    weight : String,
    location: String,
    "SW Desc": String,
    "SH Desc": String,
    ability1: String,
    ability2: String,
    hiddenAbility: String
});

module.exports = mongoose.model('Pokemon', pokemonSchema);