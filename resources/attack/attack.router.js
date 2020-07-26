const express = require('express');
const controllers = require('./attack.controllers');
const router = express.Router();
const auth = require('../login/login.controllers');

router.post('/getNext', auth.authenticateToken, controllers.getNext)
router.post('/search', auth.authenticateToken, controllers.search)
router.post('/getbyid', auth.authenticateToken,controllers.getbyid)
router.post('/insertdata', auth.authenticateToken,controllers.insertData)

module.exports = router;