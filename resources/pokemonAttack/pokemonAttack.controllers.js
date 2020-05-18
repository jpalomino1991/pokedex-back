const Controller = require('../controller');

let con = new Controller('pokemonAttack');

const search = con.search;

const insertData = con.insertData;

module.exports = {
    search,
    insertData
};