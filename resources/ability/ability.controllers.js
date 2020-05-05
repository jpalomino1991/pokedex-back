const Controller = require('../controller');

let con = new Controller('ability');

const getNext = con.getNext;

const search = con.search;

module.exports = {
    getNext,
    search
};