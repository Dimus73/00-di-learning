const express = require('express');
const router = express.Router();

const {_checkLogin} = require('../controllers/login.js');

router.post ('/login', _checkLogin);

module.exports = {
	router
}