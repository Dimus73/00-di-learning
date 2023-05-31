console.log('Hello');
let currObj={};
const myKey='aa4eb3ad520b1e69aaaa4871'
const select_from = document.querySelector('#select_from');
const select_to = document.querySelector('#select_to');

Init();

async function Init(){
	let question = `https://v6.exchangerate-api.com/v6/${myKey}/codes`;
	let data = await getDataFromAPI(question);
	currObj = Object.fromEntries(data.supported_codes)  
	createSelecItems(select_from,currObj);
	createSelecItems(select_to,currObj);
}

function createSelecItems(tag, currObj){
	for (key in currObj){
		let opt = document.createElement('option');
		opt.setAttribute('value', key);
		opt.textContent = currObj[key];
		tag.appendChild(opt);
	}
	tag.value='';
}

async function getDataFromAPI(str_q){
	try{
		let charecter = await fetch(str_q);
		let charecter_ob = await charecter.json();
		return charecter_ob;
	}catch{
		console.log('Error');
	}
}

async function calc (e){
	e.preventDefault();
	let form = document.forms.currency;
	console.log('form:', form);
	let reyting = await getRayting(form.select_from.value, form.select_to.value);
	form.resalt.value = Number(form.amount.value) * reyting

}

async function getRayting(curr1, curr2){
		let question = `https://v6.exchangerate-api.com/v6/${myKey}/pair/${curr1}/${curr2}`
		let data = await getDataFromAPI(question);
		console.log(data);
		return data.conversion_rate
}

function flip(e){
	e.preventDefault();
	let form = document.forms.currency;
	let temp = form.select_from.value;
	form.select_from.value = form.select_to.value;
	form.select_to.value = temp;
	temp = form.resalt.value;
	form.resalt.value = form.amount.value;
	form.amount.value = temp;

}