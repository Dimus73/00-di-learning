//01-02
 
// n=prompt('Enter words');
// fetch('https://api.giphy.com/v1/gifs/search?'+ new URLSearchParams({
// 	q:n,
// 	rating:'g',
// 	api_key:'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'	
//   }
// )).then(d => d.json())
// .then (d => show_gifts(d.data))
// // .then (d => console.log(d))

// function show_gifts(gifs_list){
// 	const div = document.createElement('div');
// 	document.body.append(div);
	
// 	for (let i=0; i<15;i++){
// 		img = document.createElement('img');
// 		img.src = gifs_list[i].images.original.url
// 		div.appendChild(img);
// 	}
	
// }

//03

// async function read_fn(){
// 	try{
// 	 res = await fetch('https://www.swapi.tech/api/starships/9/');
// 	 res_j = await res.json();
// 	 console.log("Is it printing?");
// 	 console.log(res_j);
// 	} catch (err) {
// 		console.log('ddddddddd');
// 		console.log('Error Dima print ', err);
// 	}
// }

// read_fn();

//04
let img_container = document.querySelector('#img_container');
async function clickEvent(e){
	e.preventDefault();
	myForm = document.forms.serch_form
	if (myForm.search.value != ''){
		console.log('Search string:', myForm.search.value);
		let gif=await read_fn();
		let gif_url = gif.data[0].images.original.url
		console.log(gif_url);
		addGifToScreen(gif_url);
	}
	
}

async function read_fn(search_str){
	try{
	 res = await fetch('https://api.giphy.com/v1/gifs/search?'+ new URLSearchParams({
			q:search_str,
			limit:1,
			offset:rndRange(1,20),
			rating:'g',
			api_key:'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'	
		  })
	 )
	 res_j = await res.json();
	 console.log("Is it printing?");
	 console.log(res_j);
	 return res_j;
	} catch (err) {
		console.log('ddddddddd');
		console.log('Error Dima print ', err);
	}
}

function addGifToScreen(url){
	let div_block = document.createElement('div');
	div_block.setAttribute('margin','40px')
	div_block.classList.add('flex_div');
	div_block.classList.add('gif_cont');
	div_block.style.justifyContent = 'space-around';
	div_block.style.margin = '40px';
	div_block.style.display = 'inline-flex';


	let img = document.createElement('img');
	img.src = url;
	img.setAttribute('width', '300px')
	// img.setAttribute('height', '300px')

	let button = document.createElement('button');
	button.textContent='Delete image';
	button.style.marginTop = '10px'
	button.style.marginBottom = '80px'
	button.setAttribute('onclick', 'deleteGif(event)')

	div_block.appendChild(img);
	div_block.appendChild(button);

	img_container.appendChild(div_block);
}
function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}
 
function deleteGif(e){
	e.preventDefault();
	console.log(e);
	e.target.parentElement.remove();
}

function deleteAll(e){
	e.preventDefault();
	let gifList = img_container.getElementsByClassName('gif_cont');
	console.log(gifList);
	for (let i = 0 ; i < gifList.length; i++){
		console.log(gifList[i]);
		// gifList[i].remove();
		gifList[i].style.display = 'none';

	}
}
