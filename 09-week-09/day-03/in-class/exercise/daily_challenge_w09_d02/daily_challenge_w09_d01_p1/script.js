function makeAllCaps(words){
  return new Promise((resolve,reject) => {
    if (words.every(value => typeof(value) === 'string')){
      words.forEach(element => element.toUpperCase());
      resolve(words);
    } else {
      reject('Not all elements are strings')
    }
  })
}

function sortWords(words){
  return new Promise((resolve, reject) =>{
    console.log(words.length);
    if (words.length > 4){
      resolve(words.sort());
    } else {
      reject("Too few items. Need at least 4")
    }
  })
}

makeAllCaps([1, "pear", "banana"])
.then(data => sortWords(data))
.then(data => console.log(data))
.catch(err => console.log(err))

