//************* Exercise 1 : Menu */

const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

//#01
let isDessert = menu.some((value) => {
	return value.type === 'dessert';
})
console.log(`Ther is a dessert in menu. It's ${isDessert}`);

//#02
let isStarter = menu.every((value)=>{
	return value.type === 'starter';
})
console.log(`Ther is onli starter in menu. It's ${isStarter}`);

//#03
let isMainCourse = menu.some((value)=>{
	return value.type === 'main course';
})
if (!isMainCourse){
	menu.push({
    type : "Main course",
    name : "Burger"

	})
}
console.log(menu);

//#04

for (item of menu){
	item.vegetarian = item.name.split(" ").some((element) =>{
		return vegetarian.includes(element.toLowerCase());
	})
}
console.log(menu);


//************* Exercise 2 : Chop Into Chunks */
function string_chop(str, n){
	let arr=[];
	let s = 0;
	let e = 0;
	do{
		e=s+n;
		console.log(s ,e ,str.slice(s,e));
		arr.push(str.slice(s,e)); 
		s+=n;
	} while (s < str.length);
	return arr;
}
console.log(string_chop('developers',3)); 

//************* Exercise 3 : You Said String ? */

function search_word(str, st){
	let i = 0;
	let n = 0;
	n = str.indexOf(st);
	if (n>0){
		do{
		  str = str.slice(n+st.length,);
			i++;
			n = str.indexOf(st);
		}while(n>0);
		return `"${st}" was found ${i} times.`

	}else{ return `Ther is not **${st}**`}

}

console.log(search_word('The quick brown fox fox fox', 'fox')); 

//************* Exercise 4 : Reverse Array */
function reverseArray(arr){
	let temp = [];
	for (let i = arr.length-1; i>=0 ;i--){
		temp.push(arr[i]);
	}
	return temp;
}

console.log(reverseArray([]));

