// // try catch

// console.log('befor');
// function x(){
// 	try{
// 		a;
// 	} catch(error){
// 		// console.log(error.message);
// 		// console.log(error.name);
// 		// console.log(error.stack);
// 		throw new Error('error in x function');
// 	}
// }

// try{
// 	x();
// }
// catch(e){
// 	console.log(e)
// }
// console.log('after');

// function getX(){
// 	setTimeout(()=>{
// 	return 5;
// 	}, 1000)
// }

// function getY(){
// 	return 6;
// }

// function getXY(){
// 	let x = getX();
// 	let y = getY();
// 	console.log(x+y);
// }

// getXY();

// function getX(callback){
// 	console.log(('Waiting for x'....));
// 	setTimeout(()=>{
// 		console.log('Geting X');
// 		callback(5);
// 	}, 2000)
// 	}

// function getY}

// const p = new Promise((resolve, reject)=>{
// 	reject("Promise was rejected")
// })

// console.log(p);

// const flip = () => {
// 	const coin = Math.floor(Math.random()*3);
// 	return (coin<2) ? (coin == 0) ? 'head' : 'tail' : 'Side';
// }


// // console.log(flip());

// const flipCoin = new Promise((resolve, reject)=>{
// 	const flipResult = flip();
// 	if (flipResult == 'head' || flipResult == 'tail'){
// 		resolve(flipResult)
// 	} else{
// 		reject(flipResult)
// 	}
// })

// console.log(('flipping a coint ....'));
// flipCoin
// .then((res)=>{
// 	console.log('resolve', res);
// })
// .catch((e)=>{
// 	console.log(e);
// })


// const n_func = (x) =>{
// 	return new Promise((res,rej) =>{
// 		if (x>10){
// 			return ">10";
// 		}
// 	})
// }

function fib_func(numb){
	let fib=[];
	fib[0]=0;
	fib[1]=1;
	let i=2;
	while ( (fib[i-2] + fib[i-1]) <= numb){
		fib.push( fib[i-2] + fib[i-1] );
		i++;
	}	
	return fib;
}

function sum_fib (numb){
 	arr = fib_func(numb);
 	sum = arr.reduce((acc,value) => acc+=value , 0);
	console.log('Summ:',sum);
}

console.log("Test");
sum_fib(2000);