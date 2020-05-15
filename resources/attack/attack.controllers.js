const Attack = require('./attack.model');
const Controller = require('../controller');

let con = new Controller('attack');

const getNext = con.getNext;

const search = con.search;

const getbyid = con.getbyid;

module.exports = {
    getNext,
    search,
    getbyid
};