const express = require('express');
const controllers = require('./pokemonAttack.controllers');
const router = express.Router();

router.post('/search', controllers.search)
router.post('/insertdata',controllers.insertData)

module.exports = router;