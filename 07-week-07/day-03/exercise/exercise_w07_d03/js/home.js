const people = ["Greg", "Mary", "Devon", "James"];
// v = people
// v.shift()
console.log('Part I - Review About Arrays')

people.shift()
people[2]='Jason'
people.push('Dima')

console.log("People:", people)
console.log(people.indexOf('Devon'))

t = people.slice(1,people.length-1)
console.log("T:",t)

last = people[people.length-1]
console.log("Last:", last)

//***************************** 

console.log('Part II - Loops')
for (let p of people){
	console.log(p)
}
console.log('Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . ');

i=0
while (people[i] != 'Jason' ){
	console.log(people[i]);
	i++;
}

//******* Exercise 2 : Your Favorite Colors **************/
colors = ['Blue', 'Black', 'Cyan', 'Magenta', 'Yellow'];

for (let ii = 1; ii < colors.length; ii++){
	switch (ii){
		case 1:
			s = 'st';
			break;
		case 2:
			s = 'nd';
			break;
		case 3:
			s = 'rd'
			break
		default:
			s = 'th'; 
	}
	console.log("My ".concat(ii, s," choice is ", colors[ii-1]));
}
//******* Exercise 3 : Repeat The Question **************/

let a
do{
	a = prompt("Please enter a number greater than 10:")
} while (Number(a)<10)
console.log("Your number", a)

//******* Exercise 4 : Building Management **************/
const building = {
	numberOfFloors: 4,
	numberOfAptByFloor: {
			firstFloor: 3,
			secondFloor: 4,
			thirdFloor: 9,
			fourthFloor: 2,
	},
	nameOfTenants: ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
			sarah: [3, 990],
			dan:  [4, 1000],
			david: [1, 500],
	},
}

//Console.log the number of floors in the building.
console.log("The number of floors:", building.numberOfFloors);

//Console.log how many apartments are on the floors 1 and 3. 
//I do this for all floors
for (let f in building.numberOfAptByFloor){
	console.log(f,":",building.numberOfAptByFloor[f]);
}

//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]," ", building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]) 

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let temp = building.numberOfRoomsAndRent;
if (temp['sarah'][1]+temp['david'][1] > temp['dan'][1]){
	temp['dan'][1] = 1200;
}
console.log("Dan rent is:", temp['dan'][1])


//******* Exercise 5 : Family **************/
family = {
	Persons:5,
	familiName:'Black'
}

for (let s in family){
	console.log(s,':',family[s])
}

//******* Exercise 6 : Rudolf **************/
let stg="";
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
	
}
for(let s in details){
	stg=stg.concat(s," ",details[s]," ");
}
console.log(stg);

//******* Exercise 7 : Secret Group **************/
let fl=[]
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
for (let i=0; i < names.length-1; i++){
	fl[i] = names[i][0]
}
fl.sort()
console.log(fl.join(""))


