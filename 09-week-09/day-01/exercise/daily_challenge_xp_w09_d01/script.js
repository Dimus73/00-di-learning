// function allTruthy(){
//   return Object.values(arguments).every((value)=>Boolean(value));
// }

allTruthy = (...v) => v.every((value)=>Boolean(value));

console.log(allTruthy(1,2,3,4,5,6,7,8,1)); 