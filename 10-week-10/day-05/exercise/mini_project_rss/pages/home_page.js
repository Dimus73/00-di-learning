const Parser = require("rss-parser");

let parser = new Parser

const homePage = async (req,res)=>{
	let feed = await getAllNews()
	res.render('index', feed);
}


async function getAllNews(){

	let feed = await parser.parseURL('https://www.reddit.com/.rss');
	// console.log(feed);
	return feed;

}

module.exports ={
	homePage
}
