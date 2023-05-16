let star_line = ""

for (let i=1 ;i<=6;i+=1){
	star_line="*".repeat(i);
	console.log(star_line);
}

for (let i=1; i<=6; i+=1){
	star_line="";
	for (let b=1; b<=i; b+=1){
		star_line+='*';
	}
	console.log(star_line);
}




