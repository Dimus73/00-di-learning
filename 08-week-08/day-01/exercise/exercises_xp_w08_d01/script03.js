//01
let allBoldItems=[];
const body = document.body;
const p = document.querySelector('p');

function getBold_items(){
	allBoldItems = p.getElementsByTagName('strong');
}
function highlight(){
	for(l of allBoldItems){
		console.log(l);
		l.style.color = 'blue'; 
	}
}

function return_normal(){
	for(l of allBoldItems){
		console.log(l);
		l.style.color = 'initial'; 
	}

}

p.addEventListener('mouseover',highlight);
p.addEventListener('mouseout',return_normal);

getBold_items();
