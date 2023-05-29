//01
function compareToTen(num){
 return new Promise ((rs, rj) => {
		if (num < 10){
			rs(num);
		} else {
			rj(Error("Num more then 10"));
		}
 })
}

compareToTen(8)
 .then(data => {
		console.log(data);})
 .catch(err=>{
		console.log(err);
 })

//02

function test() {
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			resolve();
		}, 4000)
	})
}

function test() {
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			resolve();
		}, 4000)
	})
}
test().then(r =>{
	console.log('Yes')
})

let promise = new Promise(resolve => resolve('Yess'))
promise.then(d => console.log(d))

//03
let prtom1 = new Promise(re=>re(3))
prtom1.then(a => console.log(a))

let prtom3 = new Promise((re, rj) => rj('Boo!'))
prtom3.catch (a => console.log(a))

//04

// function getMeat(callback) {
// 	console.log("walking to the butcher...");
// 	setTimeout(() => {
// 			console.log("getting the beef from the butcher");
// 			callback("beef");
// 	}, 2000);
// }

// function getBuns(callback) {
// 	console.log("getting the buns from the bakery");
// 	callback("whole grains");
// }


// function putMeatBetwenBuns(bunsType, meatType, callback) {
// 	console.log("preparing the burger...");
// 	callback(`The ${meatType} burger with ${bunsType} buns is created`)
// }

// const makeBurger = () => {
// 	getMeat((meatType) => {
// 			getBuns((bunsType) => {
// 					putMeatBetwenBuns(bunsType, meatType, (finalBurger) => {
// 							console.log(finalBurger);
// 					})
// 			})
// 	})
// }

// const burger = makeBurger();