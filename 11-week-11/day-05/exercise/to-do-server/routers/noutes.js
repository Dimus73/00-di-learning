const express = require('express')
const router = express.Router();

const {
	_notesList,
	_notesAdd,
	_notesDel
} = require('../controllers/notes')

router.get('/list', _notesList);
router.post('/list', _notesAdd);
router.delete('/list/:id', _notesDel);

module.exports = {
	router
}