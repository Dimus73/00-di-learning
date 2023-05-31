console.log('Hello');

async function getNewPiole (e){
	e.preventDefault();
	setSpin();
	let question = 'https://www.swapi.tech/api/people/'+rndRange(1,83);
	let data = await getDataFromAPI(question);
	// console.log(data);
	// console.log(data.result.properties.name);
	let charecter =extractCharecterData(data);

	question = charecter.homeWord;
	data = await getDataFromAPI(question);
	// console.log('Planet', data);
	charecter.homeWord = data.result.properties.name;
	
	displayCharecter(charecter);
	console.log(charecter);

}

async function getDataFromAPI(str_q){
	try{
		let charecter = await fetch(str_q);
		let charecter_ob = await charecter.json();
		return charecter_ob;
	}catch{
		let('Error');
	}
}

function extractCharecterData(data){
	return {
		name:data.result.properties.name,
		heght:data.result.properties.height,
		gender:data.result.properties.gender,
		birthYear:data.result.properties.birth_year,
		homeWord:data.result.properties.homeworld
	}

}

function displayCharecter(character){
	let div = document.querySelector('#info');
	div.textContent='';

	let name = document.createElement('div');
	name.textContent = character.name;
	name.style.fontSize = '30px';
	name.classList.add('text_info');
	div.appendChild(name);

	let heght = document.createElement('div');
	heght.textContent = 'Heght: '+character.heght;
	heght.classList.add('text_info');
	div.appendChild(heght);
	
	let gender = document.createElement('div');
	gender.textContent = 'Gender: '+character.gender;
	gender.classList.add('text_info');
	div.appendChild(gender);
	
	let birthYear = document.createElement('div');
	birthYear.textContent = 'Birth Year: '+character.birthYear;
	birthYear.classList.add('text_info');
	div.appendChild(birthYear);
	
	let homeWord = document.createElement('div');
	homeWord.textContent = 'Home World: '+character.homeWord;
	homeWord.classList.add('text_info');
	div.appendChild(homeWord);
	
}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}

function setSpin(){
	let div = document.querySelector('#info');
	div.textContent='';
	let divOut = document.createElement('div');
	divOut.classList.add('fa-3x');
	let i = document.createElement('i');
	i.classList.add('fa-solid', 'fa-spinner', 'fa-spin-pulse', 'fa-spin-reverse');
	divOut.appendChild(i);
	div.appendChild(divOut);

} 