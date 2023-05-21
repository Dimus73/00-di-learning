//01
let counter = 3;
let formData={}
const span = document.querySelector("#story")
const shuffButton = document.querySelector("#shuff-button")

function playTheGame(e){
	e.preventDefault();
	const elements=e.target.elements;
	formData = getDataFromForm(elements);
	if (!checkData(formData)){
		alert("Please fill in all the fields");
		return;
	}
	span.textContent=story1(formData);
}

function shuffleTheGame(e){
	console.log(formData, ('noun' in formData));
	if (! ('noun' in formData)){
		return;
	}
	e.preventDefault();
	let story;
	switch (rnd_range(1,3)){
		case 1:
			story=story1(formData);
			break
		case 2:
			story=story2(formData);
			break
		case 3:
			story=story3(formData);
			break
	}
	span.textContent = story;
	counter--;

	if (counter === 0 ){
		shuffButton.style.display = 'none';
	}
}

function rnd_range(a,b){
	let n = Math.random()*(b-a);
	return Math.round(n)+a;
}
function getDataFromForm(elements){
	let data = {
		noun:noun.value,
		adjective:adjective.value,
		person:person.value,
		verb:verb.value,
		place:place.value
	}
	for (w in data){
		data[w]=data[w].trim();
	}
	return data;
}

function checkData(data){
	for (w in data){
		if (data[w] ===''){
			return false;
		}
		return true;
	}
}

function story1(data){
let story = `\
Story **---1---** In the whimsical town of Byteville, there lived a nerdy programmer named ${data.person}. \
With his unruly hair and mismatched socks, he was the epitome of ${data.noun}. One day, \
while debugging a particularly stubborn code, Barry exclaimed, "I swear, this bug \
is more ${data.adjective} than my ex-girlfriend!" The computer chuckled back, "Error: \
Ex-girlfriend not found." Barry ${data.verb} into laughter, realizing he had inadvertently \
created a ${data.place} for his computer. And thus, began the quirky love story of Barry\
and his sentient coding companion, giving a whole new meaning to the term\
"byte-sized romance."`
return story;
}

function story2(data){
let story = `\
Story **---2---** In the whimsical town of Byteville, there lived a nerdy programmer named ${data.person}. \
With his unruly hair and mismatched socks, he was the epitome of ${data.noun}. One day, \
while debugging a particularly stubborn code, Barry exclaimed, "I swear, this bug \
is more ${data.adjective} than my ex-girlfriend!" The computer chuckled back, "Error: \
Ex-girlfriend not found." Barry ${data.verb} into laughter, realizing he had inadvertently \
created a ${data.place} for his computer. And thus, began the quirky love story of Barry\
and his sentient coding companion, giving a whole new meaning to the term\
"byte-sized romance."`
return story;
}

function story3(data){
let story = `\
Story **---3---** In the whimsical town of Byteville, there lived a nerdy programmer named ${data.person}. \
With his unruly hair and mismatched socks, he was the epitome of ${data.noun}. One day, \
while debugging a particularly stubborn code, Barry exclaimed, "I swear, this bug \
is more ${data.adjective} than my ex-girlfriend!" The computer chuckled back, "Error: \
Ex-girlfriend not found." Barry ${data.verb} into laughter, realizing he had inadvertently \
created a ${data.place} for his computer. And thus, began the quirky love story of Barry\
and his sentient coding companion, giving a whole new meaning to the term\
"byte-sized romance."`
return story;
}