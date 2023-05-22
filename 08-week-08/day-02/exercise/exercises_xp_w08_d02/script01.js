// // #1
// function funcOne() {
// 	let a = 5;
// 	if(a > 1) {
// 			a = 3;
// 	}
// 	alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// //Answer: 3
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// //Answer: Eroor

// //#2
// let a = 0;
// function funcTwo() {
// 	a = 5;
// }

// function funcThree() {
// 	alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// //Answer: 0
// funcTwo()
// funcThree()
// //Answer: 5

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// funcThree()
// //Answer: 0
// funcTwo()
// funcThree()
// //Answer: Error


// //#3
// function funcFour() {
// 	window.a = "hello";
// 	console.log('window.a:', window.a);
// }


// function funcFive() {
// 	alert(`inside the funcFive function ${a}`);
// }
// //Answer: 5

// // #3.1 - run in the console:
// funcFour()
// funcFive()

//#4
// let a = 1;
// function funcSix() {
// 	let a = "test";
// 	alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

//#5
let a = 2;
if (true) {
	let a = 5;
	alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//Answer: 5
// #5.2 What will happen if the variable is declared 
// with const instead of let ?



