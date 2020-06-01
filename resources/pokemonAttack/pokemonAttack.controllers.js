const Model = require('./pokemonAttack.model');
const Controller = require('../controller');

let con = new Controller('pokemonAttack');

const search = async (req, res) => {
    try {
      const lv = await Model.find({$and:[{'Name': {'$regex': req.body.search}},{'Lv': {$ne: ""}}]}).sort('Lv').lean().exec();
      const tm = await Model.find({$and:[{'Name': {'$regex': req.body.search}},{'TM': {$ne: ""}}]}).sort('TM').lean().exec();
      const tr = await Model.find({$and:[{'Name': {'$regex': req.body.search}},{'TR': {$ne: ""}}]}).sort('TR').lean().exec();
      const egg = await Model.find({$and:[{'Name': {'$regex': req.body.search}},{'Lv': ""},{'TM': ""},{'TR': ""}]}).sort('Move').lean().exec();
      const result = {
        'lv': lv,
        'tm': tm,
        'tr': tr,
        'egg': egg
      }
      res.status(200).json({ data: result });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
};

const insertData = con.insertData;

module.exports = {
    search,
    insertData
};