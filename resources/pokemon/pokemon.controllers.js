const Controller = require('../controller');

let con = new Controller('pokemon');

const getNext = con.getNext;

const search = con.search;

module.exports = {
    getNext,
    search
};