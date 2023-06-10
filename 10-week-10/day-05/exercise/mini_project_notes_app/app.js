const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const fs = require('fs');
const { log } = require('console');
const fileName = "note.json"

//

for (p in argv ){
	console.log(`arg ${p}: ${argv[p]}`);
}

// let jsObj = readFile(fileName);
// console.log(jsObj);

// let options = argv[_].split(',')
// console.log(options);

console.log("fffff", isFile(fileName));

if (argv._[0] === 'list') {
	displayAllNotes();
} else if (argv._[0] === 'add'){
	if (('title' in argv) && ('body' in argv)){
		addNote (argv.title, argv.body);
	} else {
		console.log("Could not find argument 'title' or 'body'");
	}
} else if (argv._[0] === 'read'){
	if (('title' in argv)){
		readNote (argv.title);
	} else {
		console.log("Could not find argument 'title'");
	}
} else if (argv._[0] === 'remove'){
	if (('title' in argv)){
		removeNote (argv.title);
	} else {
		console.log("Could not find argument 'title'");
	}
}





function displayAllNotes(){
	if (isFile(fileName)){
		const notes = readFile(fileName);
		if (notes.notes.length > 0){
			console.log(`Printing ${notes.notes.length} note(s)`);
			notes.notes.forEach(element => {
				console.log(`--`);
				console.log(`Title: ${element.title}`);
				console.log(` Body: ${element.body}`);
			});
		} else {
			console.log('No notes in file');
		}

	} else {
		console.log('File no present');
	}
}

function addNote(title,body){
	if (isFile(fileName)){
		const notes = readFile(fileName);
		notes.notes.push({title, body})
		fs.writeFileSync(fileName, JSON.stringify(notes));

	} else {
		console.log('File no present');
	}

}

function readNote(title){
	if (isFile(fileName)){
		const notes = readFile(fileName);
		const serNote = notes.notes.filter((item)=>	item.title.toLowerCase() === title.toLowerCase())
		if (serNote.length>0){
			console.log(`--`);
			console.log(`Title: ${serNote[0].title}`);
			console.log(` Body: ${serNote[0].body}`);
		} else {
			console.log('No note with this title');
		}
	} else {
		console.log('File no present');
	}	
}

function removeNote(title){
	if (isFile(fileName)){
		const notes = readFile(fileName);
		const serNote = notes.notes.filter((item)=>	!(item.title.toLowerCase() === title.toLowerCase()))
		notes.notes = serNote;
		fs.writeFileSync(fileName, JSON.stringify(notes));
	} else {
		console.log('File no present');
	}	
}


function readFile (file){
	let data = fs.readFileSync(file);
	return JSON.parse(data)
}

function isFile(file){
	try{
		fs.accessSync(file);
		return true;
	} catch(err){
		return false
	}
}

