const express = require('express');
const controllers = require('./login.controllers');
const router = express.Router();

router.post('/login', controllers.login)

module.exports = router;