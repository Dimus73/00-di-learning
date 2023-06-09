
const express = require('express');
const router = express.Router();

const {
	_getAllProfiles,
	_getProfile,
	_insertProfile,
	_updateProfile,
	_checkPfPw
} = require('../controllers/profiles.js');


router.get ('/api/profiles', _getAllProfiles);
router.get ('/api/profiles/:id', _getProfile);
router.post('/api/profiles', _insertProfile);
router.put('/api/profiles/:id', _updateProfile);
router.post('/api/checkprofile', _checkPfPw);

module.exports = {
	router
}

