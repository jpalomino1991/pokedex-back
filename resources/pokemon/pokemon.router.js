const express = require('express');
const controllers = require('./pokemon.controllers');
const router = express.Router();

router.post('/getNext', controllers.getNext)
router.post('/search', controllers.search)
router.post('/getbyid',controllers.getbyid)

module.exports = router;