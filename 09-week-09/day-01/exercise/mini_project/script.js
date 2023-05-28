const quotes = [
	{ id: 0, like:0, author: 'Albert Einstein', quote: 'Try not to become a man of success, but rather try to become a man of value.' },
	{ id: 1, like:0, author: 'Ralph Waldo Emerson', quote: 'Men are what their mothers made them.' },
	 { id: 2, like:0, author: 'Abraham Lincoln', quote: 'Nearly all men can stand adversity, but if you want to test a man\'s character, give him power.' },
	 { id: 3, like:0, author: 'George Bernard Shaw', quote: 'A gentleman is one who puts more into the world than he takes out.' },
	 { id: 4, like:0, author: 'Thomas Edison', quote: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.' },
	 { id: 5, like:0, author: 'Albert Einstein', quote: '1111Try not to become a man of success, but rather try to become a man of value.' },
	 { id: 6, like:0, author: 'Albert Einstein', quote: '22222Try not to become a man of success, but rather try to become a man of value.' },
 ];

 const quote = document.querySelector("#quote");
 const author = document.querySelector("#author");
 const like = document.querySelector("#like");
 let filter_list=[];
 
 setNewMessage(0);

function generateQuote(e){
	let r;
	do{
		console.log(quote.getAttribute('value'));
		r = rndRange (0, quotes.length-1);
		console.log(r);
	} while (r === Number(quote.getAttribute('value')));
	setNewMessage(r);
}

function rndRange(a,b){
  return Math.round(Math.random()*(b-a))+a;
}

function setNewMessage(id){
	quote.setAttribute('value', quotes[id].id);
	quote.textContent = quotes[id].quote;
	author.textContent = quotes[id].author;
	like.textContent = quotes[id].like;
 
}

function addNewQuote(e){
	e.preventDefault();
	let form = document.forms.new_quote; 
	if (form.author.value != "" && form.quote.value != ""){
		quotes.push({
			id:quotes.length,
			like:0,
			author:form.author.value,
			quote:form.quote.value
		})
		form.author.value='';
		form.quote.value='';
	}
}

function characterWithSpace(e){
	e.preventDefault();
	let form = document.forms.stat;
	form.info.value = quote.textContent.length
}

function characterWithOutSpace(e){
	e.preventDefault();
	let form = document.forms.stat;
	let length = quote.textContent.split('').filter((value)=>value!=" ").length;
	form.info.value = length
}

function words(e){
	e.preventDefault();
	let form = document.forms.stat;
	let length = quote.textContent.split(' ').length;
	form.info.value = length;
}

function likePlus(e){
	e.preventDefault();
	let id = Number(quote.getAttribute('value'));
	quotes.filter((value)=>value.id===id)[0].like+=1;
	setNewMessage(id);
}

function filter_fn(e){
	e.preventDefault();
	let form = document.forms.filtr_navigate;
	let s_str = form.info.value;
	if (s_str != ''){
		filter_list = quotes.map((value)=> (value.author.toLowerCase().indexOf(s_str.toLowerCase()) != -1) ? value.id : " ");
		filter_list = filter_list.filter((value) => !(value === ' '));
		form.position.value = 0;
		setNewMessage(filter_list[0]);
	}
}

function previous(e){
	e.preventDefault();
	let form = document.forms.filtr_navigate;
	p = form.position.value;
	if (p>0){
		p--;
		form.position.value = p;
		setNewMessage(filter_list[p]);
	}
}

function next(e){
	e.preventDefault();
	let form = document.forms.filtr_navigate;
	p = form.position.value;
	if (p<filter_list.length-1){
		p++;
		form.position.value = p;
		setNewMessage(filter_list[p]);
	}
}