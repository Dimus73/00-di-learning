//***************** Exercise 1 : Location */
const person = {
  name: 'John Doe',
  age: 25,
  location: {
      country: 'Canada',
      city: 'Vancouver',
      coordinates: [49.2827, -123.1207]
  }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//***************** Exercise 2: Display Student Info */
function displayStudentInfo(objUser){
  let {first, last} = objUser;
  console.log (`Your full name is ${first} ${last}`);

}
displayStudentInfo({first: 'Elie', last:'Schoppik'});

//***************** Exercise 3: User & Id */
const users = { user1: 18273, user2: 92833, user3: 90315 }
let res = Object.entries(users);
console.log(res);

//***************** Exercise 4 : Person Class */
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//***************** Exercise 5 : Dog Class */
class Dog {
  constructor(name) {
    this.name = name;
  }
};
  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  
//Exercise 6 : Challenges
console.log([2] === [2], {} === {});

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

class Animal{
  constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Manal extends Animal{
  constructor (name, type, color, sound_a){
    super(name, type, color);
    this.sound_a = sound_a;
  }
  sound () {
    console.log(`${this.name}, ${this.type}, ${this.color}, ${this.sound_a}`);
  }
}

let farmerCow = new Manal ('Burenka', 'Cow', 'Blue','Muuuuuu') 

farmerCow.sound();