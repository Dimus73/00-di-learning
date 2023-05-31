
//02
let resolveAfter2Seconds = function () {
	console.log("starting slow promise");
	return new Promise(resolve => {
			setTimeout(function () {
					resolve("slow");
					console.log("slow promise is done");
			}, 2000);
	});
};

let resolveAfter1Second = function () {
	console.log("starting fast promise");
	return new Promise(resolve => {
			setTimeout(function () {
					resolve("fast");
					console.log("fast promise is done");
			}, 1000);
	});
};

let sequentialStart = async function () {
	console.log('==SEQUENTIAL START==');
	const slow = await resolveAfter2Seconds();
	console.log(slow);
	const fast = await resolveAfter1Second();
	console.log(fast);
}

sequentialStart()

// //03
// let resolveAfter2Seconds = function () {
// 	console.log("starting slow promise");
// 	return (new Promise(resolve => {
// 			setTimeout(function () {
// 					resolve("slow");
// 					console.log("slow promise is done");
// 			}, 4000);
// 	});)
// };

// let resolveAfter1Second = function () {
// 	console.log("starting fast promise");
// 	return new Promise(resolve => {
// 			setTimeout(function () {
// 					resolve("fast");
// 					console.log("fast promise is done");
// 			}, 3000);
// 	});
// };

// let concurrentStart = async function () {
// 	console.log('==CONCURRENT START with await==');
// 	const slow = resolveAfter2Seconds();
// 	const fast = resolveAfter1Second();
// 	console.log(await slow);
// 	console.log(await fast);
// }

// setTimeout(concurrentStart, 8000)
// concurrentStart();