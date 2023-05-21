let id = 0;
const anim = document.querySelector('#animate')
let i = 0;
function myMove(){
	if (i>0){
		return;
	}
	id = setInterval(function(){
		anim.style.left=i+'px';
		if (i > 350){
			clearInterval(id);
		}
		i++;
	},1)
}