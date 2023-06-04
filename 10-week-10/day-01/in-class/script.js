const {greeting} = require('./greeting.js')
const {car_fn} = require('./cars.js')
const {user_fn} = require('./users.js')
const name ='Mikle Taylor'

console.log(greeting);

greeting(name)
async function test(){
	let aa= await user_fn('https://jsonplaceholder.typicode.com/users')
	console.log(aa);
}
car_fn('DDDD', 'Aaaaa', 'CCCCCC')
// let aa= await user_fn('https://jsonplaceholder.typicode.com/users')
// console.log(aa);
test();