let btn = document.getElementById("btn")
console.log(btn)

function sayhello(event){
	console.log("hello");
	console.log(event.key);
}

document.addEventListener("keydown", sayhello)
btn.addEventListener("click", sayhello)