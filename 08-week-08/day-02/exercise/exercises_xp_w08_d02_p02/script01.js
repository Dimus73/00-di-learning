// #01

const summ = (a,b) => a+b;
console.log(summ(1,1), summ(23,42));

// #02
function convertV1(a){
	return a*1000
}
let convertV2 = function (a){
	return a*1000
}
let convertV3 = (a) => a*1000;

console.log(convertV1(2),convertV2(2),convertV3(2));

//#03
const fStr = (childrenN, partnerName, location, jobTitle) =>{
	const body = document.body;
	const p = document.createElement('p');
	p.textContent = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${childrenN} kids.`
	body.appendChild(p);
}
fStr("111111", "222222", "3333333", "44444444")

//#04

function add_user(userName){
	const my_li = document.querySelector('#point');
	let new_li = my_li.cloneNode(true);
	new_li.id = 'new_point';
	let a = new_li.getElementsByTagName('a');
	a[0].textContent = userName;
	my_li.parentElement.appendChild(new_li);

	let img = document.createElement('img');
	img.setAttribute('src','test.jpg');
	img.setAttribute('width','50px');
	my_li.parentElement.appendChild(img);

}

add_user('Dmitry Prigozhin');

//#05
function makeJuice(size){
	let ingr =[];
	// ingr.length
	addIngredients('111','222', '333');
	addIngredients('444','555', '777');
	displayJuice(size);

	function addIngredients(ing1, ing2, ing3){
		ingr.push(ing1);
		ingr.push(ing2);
		ingr.push(ing3);
	}

	function displayJuice(size){
		let str_ing='';
		ingr.forEach((item,index,arr)=>{
			str_ing+=item+((index!=arr.length-1)? "," : ".") ;
		})
		let out_string = `The client wants a ${size} juice, containing ${str_ing}`
		const body = document.body;
		const p = document.createElement('p');
		p.textContent = out_string;
		body.appendChild(p);
	
	}
}

makeJuice('Big');
