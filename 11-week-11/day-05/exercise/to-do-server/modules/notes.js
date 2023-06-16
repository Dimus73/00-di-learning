const {db} = require('../config/db')

const notesList = () => {
	console.log('****** In Module List');

	return db('notes')
	.select('*')
}

const notesAdd = (notes) => {
	return db('notes')
	.insert({notes})
	.returning('*')
}

const notesDel = (id) =>{
	return db('notes')
	.where({id})
	.del()
	.returning('*')
}

module.exports = {
	notesList,
	notesAdd,
	notesDel
}