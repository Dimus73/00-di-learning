const gameInfo = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},
 ];

 let userName=[];
 let userName1=[];
 let totalScore=0;

 gameInfo.forEach((item)=>{
	userName.push(item.username+'!');
	totalScore+=item.score;
 })
 console.log(userName);

 gameInfo.forEach((item)=>{
	if(item.score>5){
		userName1.push(item.username+'!');
	}
 })
 console.log(userName1); 
 console.log(totalScore);