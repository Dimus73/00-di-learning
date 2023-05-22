// #1
const test_arr=[1,2,3,3,3,4,6,8,4,5,6,7];
function totalSumm(arr){
	let s=0;
	for (n of arr){
		s+=n;
	}
	return s;
}
console.log(totalSumm(test_arr));

//#2
function remDupl(arr){
	let temp=[];
	for (n of arr){
		if (!(n in temp)){
			temp.push(n);
		}
	}
	return temp
}
console.log(remDupl(test_arr));

//#3 Var 1
let test_arr1 = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let notGood = [NaN, 0, false, '',undefined, null];
let t=[]
let flag = true
for(n of test_arr1){
	flag = true;
	console.log(n, typeof n);
	for (ng of notGood){
		if (n === ng){
		    flag=false;
		}
	}
	if (flag && !isNaN(n)){
		t.push(n);
	}
}
console.log('t_v1:',t); 

//#3 Var 2
let t_v2=[];
test_arr1.forEach((item) => {
	let testNumber = item;
	let flag = notGood.some((item)=>{
		return testNumber === item; 
	})
	if (!flag && !isNaN(item)) {
		t_v2.push(item);
	}
})
console.log('t_v2:', t_v2)

//#4
function repeat(str, n=1){
	let temp='';
	for (i=1; i<=n; i++){
		temp+=str;
	}
	return temp;
}
console.log(repeat('Ha!',3));
"Ha!Ha!Ha!"

//#5
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(9, ' '); 
rabbit = rabbit.padStart(9, ' '); 

turtle = turtle.trim().padEnd(9, '='); 
rabbit = rabbit.trim().padEnd(9, '='); 
console.log(startLine);
console.log(turtle);
console.log(rabbit);

