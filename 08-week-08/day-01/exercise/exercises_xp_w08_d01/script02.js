//01
const body = document.body;
const form = body.querySelector('form');
console.log(form);

//02
const fn = document.getElementById("fname");
const ln = document.getElementById("lname");
console.log(fn,  ln);

//03
console.log(form.elements.fname, form.elements.lname);

//04
function submitFunction (e){
	e.preventDefault();
	const elements = e.target.elements;
	console.log(elements.fname.value, elements.lname.value);
	let f=elements.fname.value;
	let l=elements.lname.value;
	l=l.replaceAll(' ','');
	l=l.trim();
	f=f.replaceAll(' ','');
	f=f.trim();
	if (l != elements.lname.value || f != elements.fname.value){
		alert('You entered an invalid name value')
	} else {
		let ul = document.querySelector('.usersAnswer');
		let li = document.createElement('li');
		li.textContent = 'first name of the user '+ f;
		ul.appendChild(li);
		li = document.createElement('li');
		li.textContent = 'last name of the user ' + l;
		ul.appendChild(li);
	}

}