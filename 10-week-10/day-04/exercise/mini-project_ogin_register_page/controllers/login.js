const bcrypt = require('bcrypt');
const {
	checkLogin,
	addLoginInfo,
	allLoginsOfUser
} = require('../modules/login.js')

const {
	updateProfile
} = require('../modules/profiles.js')

const _checkLogin = async (req, res) =>{
	let login = req.body.username;
	let password = req.body.password;
	console.log(`Login:${login}    Password:${password}`);
	checkLogin(login)
	.then (async data =>{
		if (data.length ===1){
			const match = await bcrypt.compare(password, data[0].password);
			if (match){
//***************************************************************** */
				updateResult = await addTimestampToProfile(data[0].id)
				const currentDate = new Date();			
				const logRegData={
					user_id: data[0].id,
					username: data[0].username,
					password: data[0].password,
					log_date: currentDate.toISOString()
				} 
				logsResult = await addLoginRegistration(logRegData);
//***************************************************************** */
				res.json({ok:true,data:updateResult})
			} else{
				res.json({ok:false,msg:"Username and password combination is not correct"})
			}
		}
		else if (data.length === 0){
			res.json ({ok:false, msg:"The user with this login is not registered. Please register first."})
		}
		else {
			res.json({ok:false, msg:"Database structure error Multiple users found with the same login."})
		}
	})
	.catch (err => {
		console.log(err);
		res.status(404).json({msg:err.message})
	})
}

//Makes a change to the date of the last login in the profile
async function addTimestampToProfile (id){
	console.log('Start change date ');
	const currentDate = new Date();
	timeStamp = {last_login:currentDate.toISOString()};
	result = await updateProfile (id,timeStamp);
	console.log("Last login date in profile has been changed", result);
	return result;
}

// Adds an entry to the list of logins
async function addLoginRegistration (data){
	console.log('Start add login info',data);
	result = await addLoginInfo(data);
	console.log('Login info has been added', result);
	return result
}

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

const _allLoginsOfUser = async (req, res) =>{
	let id = req.params.id;
	allLoginsOfUser(id)
	.then(data=>{
		res.json({ok:true,data})
	})
	.catch(err =>{
		res.json({ok:false, msg:err})
	})
}

module.exports = {
	_checkLogin,
	_allLoginsOfUser
}


