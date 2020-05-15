const Attack = require('./attack/attack.model');
const Ability = require('./ability/ability.model');
const Pokemon = require('./pokemon/pokemon.model');

class Model {
    constructor(mod) {
        switch(mod)
        {
            case "attack":
                this.mod = Attack;
                break;
            case "ability":
                this.mod = Ability;
                break;
            case "pokemon":
                this.mod = Pokemon;
                break;
        }
    }
    getNext = async (req, res) => {
        try {
          const info = await this.mod.find({},{name: 1}).skip(req.body.count * 5).limit(5).lean().exec();
          res.status(200).json({ data: info });
        } catch (e) {
          console.error(e);
          res.status(400).end();
        }
    };
    search = async (req, res) => {
        try {
          const info = await this.mod.find({'name': {'$regex': req.body.search}},{name: 1}).lean().exec();
          res.status(200).json({ data: info });
        } catch (e) {
          console.error(e);
          res.status(400).end();
        }
    };
    getbyid = async (req, res) => {
      try {
        const info = await this.mod.find({'_id': req.body.id}).lean().exec();
        res.status(200).json({ data: info });
      } catch (e) {
        console.error(e);
        res.status(400).end();
      }
    };
}

module.exports = Model;