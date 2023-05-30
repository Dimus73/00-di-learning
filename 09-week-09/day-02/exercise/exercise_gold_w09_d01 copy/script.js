function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

let xl = function () {
  return new Promise(resolve => resolve(x * 2));
}
console.log('timesTwoAsync>', timesTwoAsync);
console.log('xl>', xl);
const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

// Promise.all(promiseArr)
//   .then(result => {
//     console.log(result);
//   });

	console.log('promiseArr>',promiseArr);
	console.log('arr>', arr);