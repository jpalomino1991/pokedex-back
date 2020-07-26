const express = require('express');
const app = express();
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const attackRouter = require('./resources/attack/attack.router');
const abilityRouter = require('./resources/ability/ability.router');
const pokemonRouter = require('./resources/pokemon/pokemon.router');
const pokemonAttackRouter = require('./resources/pokemonAttack/pokemonAttack.router');
const loginRouter = require('./resources/login/login.router');
const morgan = require('morgan');

require('dotenv').config();
app.disabled('x-powered-by');
app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/attack',attackRouter);
app.use('/api/ability',abilityRouter);
app.use('/api/pokemon',pokemonRouter);
app.use('/api/pokemonAttack',pokemonAttackRouter);
app.use('/api/auth',loginRouter);

const { connect } = require('./db');

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