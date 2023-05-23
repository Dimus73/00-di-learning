// #1
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});


//#02
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);


// //#03
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

//#04
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(2))

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flat(2));

const greeting1 = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flat(2).join(" "));

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
console.log(trapped.flat(24));