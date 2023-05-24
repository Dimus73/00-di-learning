function calculateTip(e){
	elements = e.target.parentElement;
	console.log(e, elements);

	let billAmount = document.querySelector('#billamt').value;
	let serviceQuality = document.querySelector('#serviceQual').value;
	let numberOfPeopleTag = document.querySelector('#peopleamt');
	let numberOfPeople = Number(numberOfPeopleTag.value);
	let totalTipTag = document.querySelector('#totalTip')
	let TipTag = document.querySelector('#tip')
  console.log(billAmount, typeof serviceQuality, serviceQuality, typeof numberOfPeople, numberOfPeople);
	if (billAmount === "" || serviceQuality == 0){
		alert ("Enter bil ammount and service");
	}
	each = document.querySelector("#each");
	if (!(numberOfPeople>1)){
		console.log('Go each');
		numberOfPeopleTag.value = 1;
		numberOfPeople = 1;
		each.style.display = 'none';
	} else {
		console.log('Go NO each');
		each.style.display = null;
	}
	let total = billAmount*(1+serviceQuality)/numberOfPeople;
	total = total.toFixed(2);
	totalTipTag.style.display='block'
	TipTag.textContent = total;

}

let body=document.body;


let email = document.createElement('input');
email.setAttribute ('type','text');
email.setAttribute ('partern','[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');
let ebutton = document.createElement('button')
ebutton.textContent = 'Test e-mail';
ebutton.addEventListener ('click', testEmail);

body.appendChild(email);
body.appendChild(ebutton);

function testEmail(){
	let em = email.value;
	let part = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	let test = part.test(em);
	console.log(`E-Mail is ${test}`);
}

let br = document.createElement('br');
let button = document.createElement('button');
button.textContent = 'Get Geo Position'
button.addEventListener('click',geoPosition);
body.appendChild(br);
body.appendChild(button);


let x = document.createElement('p');
body.appendChild(x)

function geoPosition(e){
	console.log('Look for geo');
	navigator.geolocation.getCurrentPosition(showPosition);

}
function showPosition(position){
	console.log('Position:', position);
	x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 

}

