const fs = require('fs')

// try{
// 	const data = fs.readFileSync('info', 'utf-8')
// 	console.log(data);
// } catch (e){
// 	console.log();
// }

// fs.raedfile('info', 'utf-8',(err,data)={
// 	if (err){
// 		console.log(err);
// 	} else {
// 		console.log(err);
// 	}

// })

const data = "this sjkfhksfghlkjgfkgskkvb sakjbkv slkb";
fs.writeFile('hello.txt',data, 'utf-8', (err)=>{
	if (err){
		console.log(err);
	} 
})

fs.writeFile('prodact.json',JSON.stringify(prodact), 'utf-8', (err)=>{
	if (err){
		console.log(err);
	} 
})