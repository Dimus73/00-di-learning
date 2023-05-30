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

async function read_fn(){
	try{
	 res = await fetch('https://www.swapi.tech/api/starships/9/');
	 res_j = await res.json();
	 console.log("Is it printing?");
	 console.log(res_j);
	} catch (err) {
		console.log('ddddddddd');
		console.log('Error Dima print ', err);
	}
}

read_fn();

//04