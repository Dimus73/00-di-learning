//01

const div = document.getElementById('inner');
console.log(div);
div.addEventListener('mouseover',function(e){
					console.log(e);
					e.target.style.top='20px';
			}
);

div.addEventListener('mouseout',function(e){
	console.log(e);
	e.target.style.scale='1.2';
}
);

div.addEventListener('click',function(e){
	console.log(e);
	e.target.style.fontSize='40px';
}
);

div.addEventListener('dblclick',function(e){
	console.log('DBL click');
	e.target.style.backgroundColor='yellow';
}
);
