// const { log } = require("console");
console.log('Hello n1');
const urlRoot = "http://127.0.0.1:3520"
const url = "/"

getUserInfo();

async function getUserInfo(){
	try {
		let res = await fetch(urlRoot+url)
		console.log(res);
		if (res.ok){
			let obj = await res.json();
			displayUserInfo(obj);
		} else{
			displayUserInfo({a:1});
		}
	} catch (error) {
		console.log('An error:', error);
	}

}

function displayUserInfo(data){
	console.log("Response is:");
	let div = document.querySelector('#info');
	for (i in data){
		let newStr = document.createElement('div');
		newStr.innerHTML=`${i}: <b>${data[i]}</b>`;
		div.appendChild(newStr);
	}

}