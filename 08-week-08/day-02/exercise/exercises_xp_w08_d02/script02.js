// #1
const winBattle = () => true;

console.log(winBattle());

// #2
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// #3
let isItString = (a) => ((typeof a)==='string')

console.log(isItString('hello'));
console.log(isItString([1, 2, 4, 0]));

// #4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((item, index, arr)=>{
	let str = (index+1) + (((index+1) === 1) ? "st" : ((index+1) === 2) ? "nd" : ((index+1) === 3) ? "rd" : "th" ) + " choice is " + item  ;
	console.log(str);
})
let b = colors.some((item)=>(item === 'Violet'));
console.log(b ? "Yeah" : "No..");

// #5
colors.forEach((item, index, arr)=>{
	let str = (index+1) + (((index+1) < 4 ) ? ordinal[index+1] : ordinal[0] ) + " choice is " + item  ;
	console.log(str);
})


// #6
let bankAmount = 8000;
let bankAmountEndMonth=0;
let vat = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];
const detailsWithVAT=[];
details.forEach((item)=>{
	detailsWithVAT.push(Number(item)*(1+vat));
	bankAmountEndMonth+=Number(item)*(1+vat);
})
console.log(detailsWithVAT);
bankAmountEndMonth+=bankAmount;
console.log('At the end of the month:', bankAmountEndMonth);

