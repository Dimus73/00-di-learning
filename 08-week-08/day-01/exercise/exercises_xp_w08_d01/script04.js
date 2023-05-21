//01

function formFunction(e){
	e.preventDefault();
	console.log('ddddddd');
	let elements = e.target.elements;
	let r = elements.radius.value;
	console.log('rrr:',r);
	r = Number(r);
	if (!isNaN(r)){
		console.log(r,(4/3 * Math.PI * (r**3)));
		elements.volume.value = (4/3 * Math.PI * (r**3)).toFixed(2)
	} else {
		alert("Enter the number")
	}

}

