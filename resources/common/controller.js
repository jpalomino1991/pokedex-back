const Attack = require('../attack/attack.model');
const Ability = require('../ability/ability.model');
const Pokemon = require('../pokemon/pokemon.model');
const PokemonAttack = require('../pokemonAttack/pokemonAttack.model')
const fs = require('fs');
const neatCsv = require('neat-csv');

class Model {
    field = ''
    constructor(mod) {
        this.field = mod == 'pokemon' ? 'Name' : 'name'
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
            case "pokemonAttack":
                this.mod = PokemonAttack;
                break;
        }
    }
    getNext = async (req, res) => {
        try {
          const info = await this.mod.find().select(this.field).skip(req.body.count * 5).limit(5).lean().exec();
          res.status(200).json({ data: info });
        } catch (e) {
          console.error(e);
          res.status(400).end();
        }
    };
    search = async (req, res) => {
        try {
          const info = await this.mod.find().where(this.field).regex(new RegExp(req.body.search,'i')).select(this.field).lean().exec();
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
    insertData = async (req,res) => {
      try {
        fs.readFile('./' + req.body.name + '.csv', async (err, data) => {
          if (err) {
            console.error(err);
            res.send(500);
            return
          }
          let result = await neatCsv(data);
  
          let schema = '';
  
          this.mod.insertMany(result, function(err, docs) {
              if(err) return res.send(err);
              res.send('Inserted ' + docs.length + ' documents');
          })
      });
      } catch (e) {
        console.error(e);
        res.status(400).end();
      }
    }
}

module.exports = Model;