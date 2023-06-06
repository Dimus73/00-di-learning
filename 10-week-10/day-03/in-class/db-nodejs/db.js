const knex = require('knex');

const db = knex({
	client:'pg'
	connection:{
		host:'localhost',
		port: '5432',
		user: '   ',
		password: '',
		database: 'dvdrental'
	}
});

db.select('city', 'city_id')
  .from('city')
	.then( rows=>{
		console.log(rows);
	})
	.catch(err=>{
		console.log(err);
	})