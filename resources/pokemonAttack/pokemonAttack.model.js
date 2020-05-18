const mongoose = require('mongoose');

const pokemonAttackSchema = new mongoose.Schema({
    Name: String,
    Lv: String,
    Move: String,
    Type: String,
    Category: String,
    Power: String,
    Accuracy: String,
    TM: String,
    TR: String
});

module.exports = mongoose.model('PokemonAttack', pokemonAttackSchema);