//Declaring variables and constants
const regFields = {
	first_name: 'First name:',
	last_name: 'Last name:',
	email: 'E-Mail:',
	username: 'Username:',
	password: 'Password:',
	created_date: 'Created_date:',
	last_login: 'Last login date:'
}
const field_list_registry = ['first_name', 'last_name', 'email', 'username', 'password'];

const loginFields = {
	username: 'Username:',
	password: 'Password:',
}
const field_list_login = ['username', 'password'];

const spinner = '<div class="spinner"> \
									<div class="blob top"></div> \
									<div class="blob bottom"></div> \
									<div class="blob left"></div> \
									<div class="blob move-blob"></div> \
								<div>'

//Creating fields in the registration form
let divRegField = document.querySelector("#reg_fields");
displayFields(regFields, divRegField, 'reg', listenRegistry)
//Change the properties of several fields in the registration form
let form = document.forms['registry'].elements
form['email'].type='email';
form['created_date'].readOnly=true;
form['last_login'].readOnly=true;

// Creating fields in the login form
let divLogField = document.querySelector("#log_fields");
displayFields(loginFields, divLogField, 'log', listenLogin)

//Function for creating fields in forms
function displayFields(fieldsObj, target_tag, prefix, listenFunc){
	for (field in fieldsObj){
		let div =document.createElement('div')
		div.classList.add('field_div')

		let label = document.createElement('label');
		label.for = field;
		label.id = 'lbl' + '_' + prefix + '_' + field;
		label.classList.add ('label' + '_' + prefix);
		label.textContent = fieldsObj[field]

		let input = document.createElement('input');
		input.name = field;
		input.classList.add('input' + '_' + prefix);
		input.addEventListener('input', listenFunc);

		div.appendChild (label) 
		div.appendChild (input) 
		target_tag.appendChild (div) 
	}
}

// The function handles keystrokes in the registration form. 
// If all required fields are filled in, activates the button
function listenRegistry (e){
	let form = document.forms['registry'].elements
	isFill = field_list_registry.every(value => form[value].value )
	if (isFill){
		form['button'].disabled = false;
	} else {
		form['button'].disabled = true;
	}
}

// The function handles keystrokes in the login form. 
// If all required fields are filled in, activates the button
function listenLogin (e){
	let form = document.forms['login'].elements
	isFill = field_list_login.every(value => form[value].value )
	if (isFill){
		form['button'].disabled = false;
	} else {
		form['button'].disabled = true;
	}
}

// The function of processing pressing the registration button. 
// Sending data to the server. Creating a new user
async function clickOnRegistry (e){
	e.preventDefault();
	let form = document.forms['registry'].elements;
	let divInfo = document.querySelector('#info_block_r'); 
	divInfo.textContent = '';
	divInfo.innerHTML = spinner;


	let form_obj={};
	for (el of field_list_registry){
		form_obj[el]=form[el].value;
	}

	divInfo.innerHTML = spinner;

	let requestData={
		method:'POST',
		headers:{
			"Content-Type": "application/json",
		},
		body: JSON.stringify(form_obj)
	}
  try{
		res = await fetch("/api/profiles", requestData)
		if (res.status === 200){
			let resInfo = await res.json();
			console.log('Ok result', resInfo[0]);
			divInfo.textContent = 'Profile added successfully' + resInfo

// Fill in the registration form with the data obtained after creating the profile
// This data is already in the response to the add request, but, for training, 
// I request this data again with a GET request
			let form = document.forms['registry'].elements
			dataProfile = await getProfileDetail(resInfo[0].id);
			console.log('DataProfile', dataProfile);
			if (dataProfile.ok) {
				fillForm(dataProfile.data, regFields, form);
			} else {
				divInfo.textContent = dataProfile.msg;
			}
		}else{
			let error_mes = await res.json();
			console.log('Error:', error_mes.msg_i);
			divInfo.textContent = 'Profile creation error: ' + error_mes.msg_i; 
		}
	} catch (err){
			console.log("Error ----001", err);
			return "Error ----001"
	}
}

// The function of obtaining user data upon request GET.
async function getProfileDetail(id){
	try {
		res= await fetch('/api/profiles/'+id);
		resInfo = await res.json();
		if (!res.ok){
			return {ok:false, msg:"Error in Get Request"};
		} else if (resInfo.length === 0) {
			return {ok:false, msg:"There is no profile in the database with this ID"};
		} else {
			return {ok:true, data:resInfo[0]};
		}
	} catch (error) {
		return {ok:false, msg:"Error: Connection error"}
	}
}

// Function for filling the form with data
function fillForm(dataObj, fields, tag){
	for (el in fields){
	 	tag[el].value=dataObj[el];
  }
}





