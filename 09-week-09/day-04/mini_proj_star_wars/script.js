console.log('Hello');

async function getNewPiole (e){
	e.preventDefault();
	setSpin();

}


function setSpin(){
	let div = document.querySelector('#info');
	div=document.querySelector("#page")
	// div.textContent='';
	let divOut = document.createElement('div');
	divOut.classList.add('fa-3x');
	let i = document.createElement('i');
	i.classList.add('fa-solid');
	i.classList.add('fa-spinner', );
	i.classList.add( 'fa-spin-pulse');
	i.classList.add('fa-spin-reverse');
	divOut.appendChild(i);
	div.appendChild(divOut);

} 