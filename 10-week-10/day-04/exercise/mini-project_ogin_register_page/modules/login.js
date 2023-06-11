const{db} = require('../config/db.js')

const checkLogin = (username) => {
	console.log('login-------', username);
	return db('profile')
	.select('id', 'first_name', 'last_name', 'email', 'username', 'password', 'created_date', 'last_login')
	.where({username})
}

const allLoginsOfUser = (id) => {
	return db('login_registr')
	.select ('username', 'password', 'log_date')
	.where('user_id', id)
	.orderBy ('log_date', 'desc')
}

// This module is needed to add login information, 
// it does not have a controller and router
const addLoginInfo = (data) => {
	return db('login_registr')
	.insert(data)
	.returning('*')
}

// SQL sample 

// const allLoginsOfUser = (id) => {
// 	return db.raw('select * from regist' .........)
// 	// .select ('username', 'password', 'log_date')
// 	// .where('user_id', id)
// 	// .orderBy ('log_date', 'desc')
// }


module.exports = {
	checkLogin,
	addLoginInfo,
	allLoginsOfUser
}

