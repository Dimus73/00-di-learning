 function x(){

	function y(){
		return 1

	}
	return y
 }

//  let sum =x()();

//  function a(arr){
// 	arr.forEach((element,k,ar) => {
// 		ar[k] = element*2;
// 	});
// 	return arr;
//  }

//  console.log(a([1,2,3]));

// let arr=[1,2,3,4];
// let newArr = arr.map((item)=>{
// 	return item*2;
// })
// console.log(newArr);

// let arr=[1,1,5,8,2,2,3,4];
// let newArr = arr.map((item)=>{
// 	return item>3 ? item:-1;
// })
// console.log(newArr);
// let t=[];
// for (s of newArr){
// 	if (s>0){
// 		t.push(s);
// 	}
// }
// console.log(t);

// let filterArr = arr.filter((item)=>{
// 	return item>3;
// })
// console.log(filterArr);

// let arr = [
//   {name:'John', username:'jjj'},
//   {name:'johny', username:'jjjj'},
//   {name:'Johana', username:'jjjjj'},
//   {name:'Marry', username:'mmmm'},
// ];
// let n_a = arr.filter((item)=>{
//   return (item.name.toLowerCase().startsWith('jo'))
// })

// console.log(n_a);

// function summ(arr){
// 	let s=0
// 	for(f of arr){
// 		s+=f;
// 	}
// 	return s
// }

// console.log(summ([1,4,8,100]));


a = function (n){
	let b = function(k) {
		nstr=String(k);
		let t_sum = 0;
		for (p of nstr){
			t_sum+=Number(p);
		}
		if (t_sum>9){
			return b(t_sum)
		}else{
			return t_sum
		}
	}
	return b(n);
}

console.log(a(6677832468883193));