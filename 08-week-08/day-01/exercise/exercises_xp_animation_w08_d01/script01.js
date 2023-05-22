//01
const div = document.querySelector('#container')
const but = document.querySelector('#clear')
console.log("aaaaaaa", but);
let i=0;

function hW(){
	alert("Hello World")
}
setTimeout(hW,2000);
function addP(){
	p=document.createElement('p');
	p.textContent = "Hello World";
	div.appendChild(p);
	i++;
	if(i > 6){
		clearInterval(id);
	}
}

//02
setTimeout(addP,2000)

i=0;
let id = setInterval(addP,2000);

but.addEventListener('click',function(){
	console.log("Button presed")
	let m=0
	while (m<20000){
	 	let a=0;
		console.log(i);
		m++;
	 }
	clearInterval(id)
})
