const express = require('express');
const controllers = require('./pokemonAttack.controllers');
const router = express.Router();
const auth = require('../login/login.controllers');

router.post('/search', auth.authenticateToken, controllers.search)
router.post('/insertdata', auth.authenticateToken, controllers.insertData)

module.exports = router;