const top_screen = document.querySelector('#top_screen'); 
const bottom_screen = document.querySelector('#bottom_screen'); 
let pokemon_list=[];
let pokemon_selector;

async function getPokemon(e){
	e.preventDefault();
	console.log('Hello');
	bottom_screen.innerHTML='<img style="-webkit-user-select:none; display:block; margin:auto; padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);" src="http://www.complicite.org/_images/loading.gif">'
	try{
		let url = `https://pokeapi.co/api/v2/pokemon/${rndRange(1,1000)}`
		let data = await getDataFromAPI(url);
	} catch{
		displayNoPokemon()		
	}
	console.log(typeof(data));
	if (!(typeof(data) === 'number')){
		let pokemonInfo = await parsePokemonData(data);
		console.log(pokemonInfo);
		pokemon_list.push(pokemonInfo);
		pokemon_selector = pokemon_list.length-1;
		displayPokemon(pokemonInfo);
	} else {
		displayNoPokemon();
	}
}


async function getDataFromAPI(url){
	data = await fetch(url)
	if (data.status === 200){
		return data
	} else {
		return data.status
	}
}

async function parsePokemonData(data){
	data_js = await data.json();
	console.log(data_js);
	let pokemon ={
		name:data_js.name,
		id:data_js.id,
		height:data_js.height,
		weight:data_js.weight,
		img:data_js.sprites.front_default
	}
	return pokemon;
}

function displayPokemon(pokemon){
	top_screen.textContent='';
	bottom_screen.textContent = '';

	let img = document.createElement('img');
	img.src = pokemon.img;
	img.classList.add('img_in_screen')
	top_screen.appendChild(img);


	let name = document.createElement('div');
	name.classList.add('info');
	name.textContent = pokemon.name;
	name.style.fontSize = '25px';

	let no = document.createElement('div');
	no.classList.add('info');
	no.textContent = 'No: ' + pokemon.id;

	let weight = document.createElement('div');
	weight.classList.add('info');
	weight.textContent = 'Weight: ' + pokemon.weight;

	let height = document.createElement('div');
	height.classList.add('info');
	height.textContent = 'Height: ' + pokemon.height;

	bottom_screen.appendChild(name);
	bottom_screen.appendChild(no);
	bottom_screen.appendChild(weight);
	bottom_screen.appendChild(height);

}

function displayNoPokemon(){
	top_screen.textContent='';
	bottom_screen.textContent = '';

	let name = document.createElement('div');
	name.classList.add('info');
	name.textContent = 'NO POCEMON';
	name.style.fontSize = '25px';
	bottom_screen.appendChild(name);


}

function getPrevision(e){
	e.preventDefault();
	pokemon_selector = pokemon_selector > 0 ? pokemon_selector-=1 : pokemon_selector;
	console.log(pokemon_selector, pokemon_list);
  displayPokemon(pokemon_list[pokemon_selector]);
}

function getNext(e){
	e.preventDefault();
	pokemon_selector = pokemon_selector < pokemon_list.length-1 ? pokemon_selector+=1 : pokemon_selector;
	console.log(pokemon_selector, pokemon_list);
  displayPokemon(pokemon_list[pokemon_selector]);
}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}
