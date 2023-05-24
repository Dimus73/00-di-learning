let arr = [2,5,3,7,2,3,6,8,6];

let uniq = {};

for (i in arr){
	if (!(arr[i] in uniq)){
		uniq[arr[i]]=Number(i);
	}
}
console.log(uniq);
for( a in uniq){
	f=true;
	for (let i=uniq[a]+1;i<arr.length;i++){
		if (arr[i] == a){
			uniq[a]=i-uniq[a];
			f=false;
		}
	}
	if (f){
		uniq[a]=0;
	}
}
console.log(uniq);



