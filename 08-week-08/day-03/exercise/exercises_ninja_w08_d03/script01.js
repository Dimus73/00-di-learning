// #1
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
let loop_sum=0;
let reduce_sum=0;
for (d of data){
  loop_sum+=d.age*7
}

reduce_sum = data.reduce((s,item)=>{
  return s+=item.age*7;
},0);

console.log('loop:',loop_sum,'reduce_sum:',reduce_sum);

//#02
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
console.log(userEmail3.trim());

//#03

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
let newUser = [];
let user;
for (u of users){
  user = {[u.firstName + ' ' + u.lastName]:u.role};
  newUser.push(user);
}
console.log(newUser);

//#04
const letters = ['x', 'y', 'z', 'z'];
let let_obj={}
// let count = 0;
for (r of letters){
  let v=r;
  count=letters.reduce((s,value)=>{
    return (value === r) ? s+=1 : s;
  },0)
  let_obj[r]=count;
}
console.log(let_obj);