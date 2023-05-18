let pl1 = {
	name:'Mercury',
	diam:0.1,
	orb_k:0.7,
	color : {
		r:128,
		g:128,
		b:128
	},
	sputnik : {}
}
let pl2 = {
	name:'Venus',
	diam:0.25,
	orb_k:0.7,
	color : {
		r:254,
		g:204,
		b:0
	},
	sputnik : {}
}
let pl3 = {
	name:'Earth',
	diam:0.26,
	orb_k:0.7,
	color : {
		r:0,
		g:128,
		b:0
	},
	sputnik : {}
}
let pl4 = {
	name:'Mars',
	diam:0.14,
	orb_k:0.7,
	color : {
		r:255,
		g:0,
		b:0
	},
	sputnik : {}
}
let pl5 = {
	name:'Jupiter',
	diam:2.84,
	orb_k:0.8,
	color : {
		r:255,
		g:166,
		b:0
	},
	sputnik : {}
}
let pl6 = {
	name:'Saturn',
	diam:2.36,
	orb_k:0.95,
	color : {
		r:255,
		g:255,
		b:0
	},
	sputnik : {}
}
let pl7 = {
	name:'Uranus',
	diam:1.03,
	orb_k:1,
	color : {
		r:0,
		g:255,
		b:255
	},
	sputnik : {}
}
let pl8 = {
	name:'Neptune',
	diam:1,
	orb_k:1,
	color : {
		r:0,
		g:0,
		b:255
	},
	sputnik : {}
}

let planets = [pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8];
let base_planet =50;

let body = document.body
body.setAttribute ('style','background-color:black;')

let section = document.createElement('section')
section.classList.add('section')
body.appendChild(section)

for (i=0;i<8;i++){
	let div_orbit = document.createElement('div');
	div_orbit.classList.add('orbit');
	section.appendChild(div_orbit);
	let w = (15+i*10)*planets[i].orb_k;
	let h = w;
	let w_p = (100-w)/2
	let h_p = 
	div_orbit.setAttribute ('style',`width: ${w}vw;\
																		height: calc(${w}vw);\
																		left:${w_p}vw;\
																		top:calc((100vh - ${w}vw)/4)`)
	let div_pl = document.createElement('div')
	div_pl.classList.add('planet');
	div_pl.setAttribute ('style',`width: ${base_planet*planets[i].diam}px;\
																height: ${base_planet*planets[i].diam}px;\
																left:50%; right:50%;\
																bottom:${-base_planet*planets[i].diam/2}px;\
																background-color: rgb(${planets[i].color.r}, \
																											${planets[i].color.g}, \
																											${planets[i].color.b});`)
	div_orbit.appendChild(div_pl);

	let p = document.createElement('p')
	p.classList.add('name');
	p.textContent = planets[i].name;
	div_pl.appendChild(p);
	

}

