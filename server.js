const admin = require('firebase-admin');
const express = require('express');
const app = express();
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const neatCsv = require('neat-csv');
const fs = require('fs');
const mongoose = require('mongoose');
const attackRouter = require('./resources/attack/attack.router');
const attack = require('./resources/attack/attack.model');
const ability = require('./resources/ability/ability.model');
const pokemon = require('./resources/pokemon/pokemon.model');
const morgan = require('morgan');

require('dotenv').config({path: __dirname + '/.env'});
app.disabled('x-powered-by');
app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/attack',attackRouter);

const { connect } = require('./db');

/*
app.get('/attackAll', (req, res) => {
    var allAtt = new Array();
    var docRef = db.collection("Attack").orderBy('Name').limit(5);//where("Name","<=","Acid");

    docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            allAtt.push(doc.data());
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        res.send(allAtt)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});

app.post('/nextAttack', (req,res) => {
    console.log(req.body.last);
    var allAtt = new Array();
    var docRef = db.collection("Attack").orderBy('Name').startAfter(req.body.last.Name).limit(5);//where("Name","<=","Acid");

    docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            allAtt.push(doc.data());
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        res.send(allAtt)
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
});

app.post('/insertData', (req, res) => {
    console.log(req.body);
    fs.readFile('./' + req.body.name + '.csv', async (err, data) => {
        if (err) {
          console.error(err);
          res.send(500);
          return
        }
        let result = await neatCsv(data);

        let schema = '';

        switch(req.body.name)
        {
            case 'ability':
                schema = ability;
                break;
            case 'attack':
                schema = attack;
                break;
            case 'pokemon':
                schema = pokemon;
                break;
        }

        schema.insertMany(result, function(err, docs) {
            if(err) return res.send(err);
            res.send('Inserted ' + docs.length + ' documents');
        })

        console.log(result);
    });
});

app.post('/insertDataM', (req, res) => {
    let abilitySchema = new mongoose.Schema({
        name: String,
        description: String
    });
    let ability = mongoose.model('Ability', abilitySchema);

    let test = new ability({name: 'test', description: 'test'});
    test.save(function(err) {
        if(err) return res.send(err);
        console.log('inserted');
        res.send(200);
    });
});
*/
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

module.exports.start = async () => {
    try {
        await connect();
        app.listen(process.env.PORT, () => {
            console.log('listening in %s', process.env.PORT);
        });
    } catch (e) {
      console.error(e);
    }
};