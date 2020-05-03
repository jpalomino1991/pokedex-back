const Attack = require('./attack.model');

const getNext = async (req, res) => {
  try {
    const attacks = await Attack.find().skip(req.body.count * 5).limit(5).lean().exec();
    res.status(200).json({ data: attacks });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const search = async (req, res) => {
  try {
    const attacks = await Attack.find({'name': {'$regex': req.body.search}}).lean().exec();
    console.log(attacks);
    res.status(200).json({ data: attacks });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

module.exports = {
    getFirst,
    getNext,
    search
};