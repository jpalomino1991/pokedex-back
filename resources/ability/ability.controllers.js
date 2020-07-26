const Controller = require('../common/controller');

let con = new Controller('ability');

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