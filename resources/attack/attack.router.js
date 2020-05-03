const express = require('express');
const controllers = require('./attack.controllers');
const router = express.Router();

router.post('/getNext', controllers.getNext)
router.post('/search', controllers.search)

module.exports = router;