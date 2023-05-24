//******************* Exercise 1 : Print Full Name */

function printFullName(obj){
  let {first, last} = obj;
  console.log(`Your full name is ${first} ${last}`);
}

printFullName({first: 'Elie', last:'Schoppik'}) 

//******************* Exercise 2 : Keys And Values */

// function keysAndValues(obj){
//   let keys = Object.keys(obj);
//   let values = [];
//   let temp = obj;
//   keys.sort();
//   keys.forEach((item)=>{
//     values.push(temp[item]);
//   })
//   return [keys,values]

// }
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })); 

function keysAndValues1(obj){
  let keys = Object.keys(obj);
  let values = [];
  let temp = obj;
  let a = [keys.sort(), keys.map((item)=>{return (obj[item])})]
  // let a = keys.sort()
  // let b = keys.map((item)=>{
  //   console.log('ff', temp[item]);
  //   return (temp[item])})
  console.log('ttt', a);
}
console.log(keysAndValues1({ c: "Apple", b: "Microsoft", a: "Google" })); 


//******************* Exercise 3 : Counter Class */
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);



