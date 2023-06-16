const {
	notesList,
	notesAdd,
	notesDel
} = require('../modules/notes')

const _notesList = (req, res) => {
	notesList()
	.then (data =>{
		res.json(data)
	})
}

const _notesAdd = (req, res) => {

	notesAdd (req.body.notes)
	.then (data => {
		res.json(data)
	})
}

const _notesDel = (req, res) => {
	console.log('In delete:', req.params.id);
	// console.log('In delete:');
	notesDel(req.params.id)
	.then(data => res.json(data))
} 

module.exports = { 
	_notesList,
	_notesAdd,
	_notesDel
}