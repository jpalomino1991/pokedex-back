const Attack = require('./attack.model');
const Controller = require('../common/controller');

let con = new Controller('attack');

const getNext = con.getNext;

const search = con.search;

const getbyid = con.getbyid;

const insertData = con.insertData;

module.exports = {
    getNext,
    search,
    getbyid,
    insertData
};