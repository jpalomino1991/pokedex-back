const Controller = require('../controller');

let con = new Controller('ability');

const getNext = con.getNext;

const search = con.search;

const getbyid = con.getbyid;

module.exports = {
    getNext,
    search,
    getbyid
};