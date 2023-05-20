let key_list = ['button_a',
	              'button_s',
	              'button_d',
	              'button_f',
	              'button_g',
	              'button_h',
	              'button_j',
	              'button_k',
	              'button_l']

for (b of key_list){
	let btn = document.getElementById(b)
	btn.addEventListener("click", button_click)
}

document.addEventListener("keydown",button_pres)

function button_click(event){
	console.log(this);
	let key_n = this.getAttribute("key_arg");
	go_play(key_n);
}

function button_pres(event){
	console.log(event);
	go_play(event.code);
}


function go_play(key){
	let p
	cur_key = document.querySelector("[key_arg=" + key + "]");
	if (cur_key != null){
		cur_key.classList.add('activ');
		setTimeout (function(){cur_key.classList.remove('activ')}, 100);
		switch (key){
			case "KeyA":
				p = new Audio("wav/boom.wav");
				p.play();
				break;
  		case "KeyS":
				p = new Audio("wav/clap.wav");
				p.play();
				break;
			case "KeyD":
				p = new Audio("wav/hihat.wav");
				p.play();
				break;
			case "KeyF":
				p = new Audio("wav/kick.wav");
				p.play();
				break;
			case "KeyG":
				p = new Audio("wav/openhat.wav");
				p.play();
				break;
			case "KeyH":
				p = new Audio("wav/ride.wav");
				p.play();
				break;
			case "KeyJ":
				p = new Audio("wav/snare.wav");
				p.play();
				break;
			case "KeyK":
				p = new Audio("wav/tink.wav");
				p.play();
				break;
			case "KeyL":
				p = new Audio("wav/tom.wav");
				p.play();
				break;
		}
	} 
}