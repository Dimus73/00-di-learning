const Parser = require("rss-parser");

let parser = new Parser

const search = async (req,res)=>{
	let titleSts = req.query.title;
	let textSts = req.query.text;
	// console.log('titleSts: textSts',titleSts ,textSts);
	resList = []
	
	let feed = (titleSts || textSts) ? await getAllNews() : {items:[]};
	resList = feed.items.map((item) => item);

	if (titleSts){
		resList = resList.filter(item=>item.title.indexOf(titleSts) != -1)
	}

	if (textSts){
		resList = resList.filter(item=>item.content.toLowerCase().indexOf(textSts.toLowerCase()) != -1)
	}

	console.log(resList);

	feed.items = resList;
	res.render('search', feed);
}


async function getAllNews(){

	let feed = await parser.parseURL('https://www.reddit.com/.rss');
	// console.log(feed);
	return feed;

}

module.exports ={
	search
}

//http://localhost:3030/search?title=peo