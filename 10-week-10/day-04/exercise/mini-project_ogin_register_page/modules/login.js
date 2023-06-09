const{db} = require('../config/db.js')

const checkLogin = (username) => {
	console.log('login-------', username);
	return db('profile')
	.select('id', 'first_name', 'last_name', 'email', 'username', 'password', 'created_date', 'last_login')
	.where({username})
}

const addLoginInfo = (data) => {
	return db('login_registr')
	.insert(data)
	.returning('*')
}

module.exports = {
	checkLogin,
	addLoginInfo
}