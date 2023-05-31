//01

async function getRandomGif(){
	try{
		res = await fetch('https://api.giphy.com/v1/gifs/search?'+ new URLSearchParams({
			q:'any',
			api_key:'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
			limit:1,
			offset:rndRange(1,20),
			rating:'g'
		}))
		res_JS = await res.json();
		console.log(res_JS.data[0].images.original.url);
		return res_JS.data[0].images.original.url
	} catch(err){
		console.log('Err-4567:', err);
	}
}

async function setToPage(){
	let img = document.createElement('img');
	img.src = await getRandomGif();
	document.body.appendChild(img);

}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}

setToPage();

//02
let resolveAfter2Seconds = function () {
	console.log("starting slow promise");
	return new Promise(resolve => {
			setTimeout(function () {
					resolve("slow");
					console.log("slow promise is done");
			}, 2000);
	});
};

let resolveAfter1Second = function () {
	console.log("starting fast promise");
	return new Promise(resolve => {
			setTimeout(function () {
					resolve("fast");
					console.log("fast promise is done");
			}, 1000);
	});
};

let sequentialStart = async function () {
	console.log('==SEQUENTIAL START==');
	const slow = await resolveAfter2Seconds();
	console.log(slow);
	const fast = await resolveAfter1Second();
	console.log(fast);
}

sequentialStart()