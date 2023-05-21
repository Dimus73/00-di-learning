//01

const body = document.body;
// let h1 = document.body.article.h1;
h1 = body.querySelector('h1')
console.log("h1:", h1);

//02
const article = body.firstElementChild
article.removeChild( article.lastElementChild);

//03
const h2 = article.querySelector('h2');
h2.addEventListener('click', function(e){
	console.log(e);
	e.target.style.backgroundColor = 'red';
  }
)

//04
const h3 = article.querySelector('h3');
h3.addEventListener ('click',function(e){
	console.log(e);
	e.target.style.display = 'none';
	}
)

//05
const butt = document.createElement('button');
butt.textContent = 'press';
butt.addEventListener('click',function(){
		let p_list = butt.parentElement.getElementsByTagName('p')
		for (p of p_list){
			p.style.fontWeight = 'bold';
		}
		}
)
body.appendChild(butt);

//06
h1.addEventListener('mouseover', function(e){
		
		let font_size = Math.random()*100;
		e.target.style.fontSize = font_size+'px';
		}
)

//07
let p_list = body.getElementsByTagName('p')
p_list[1].addEventListener('mouseover', function(e){
	console.log(e);
	e.target.setAttribute ('style','opacity: 1; transition: opacity 1s ease;');
	e.target.style.opacity = 0;
})