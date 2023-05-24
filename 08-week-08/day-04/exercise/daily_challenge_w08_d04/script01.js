class Video {
	constructor (title, uploader, time){
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}
	watch(){
		console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
	}
}

let film1 = new Video("Film", 'Dima', 120);
film1.watch(); 

let film2 = new Video("Film Film", 'Dima', 150);
film1.watch(); 

const films = [
{
	title    : 'ff1',
	uploader : 'User1',
	time     : 100
},
{
	title    : 'ff1',
	uploader : 'User2',
	time     : 120
},
{
	title    : 'ff1',
	uploader : 'User3',
	time     : 130
},
{
	title    : 'ff4',
	uploader : 'User1',
	time     : 1140
},
{
	title    : 'ff5',
	uploader : 'User1',
	time     : 167
}
]

let film_objects=[];

films.forEach((item)=>{
	let film = new Video(...Object.values(item));
	film_objects.push(film);
})

console.log(film_objects);