const numbers = [5,0,9,1,7,4,2,6,3,8];
let temp = 0;
for (let i=0; i < numbers.length-1; i++){
	for (let x=0; x < numbers.length - i - 1 ; x+=1){
		if (numbers[x] < numbers[x+1]){
			temp=numbers[x+1];
			numbers[x+1]=numbers[x];
			numbers[x]=temp;
		} 
	}
}

console.log(numbers); 
console.log(numbers.toString("-"))
console.log(numbers.join(""))
console.log(numbers.join("-"))
console.log(numbers.join("+"))




