let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

groceries.fruits.forEach((item)=>{
	console.log(item);
})

function cloneGroceries (){
	let user = client;
	client = 'Betty';
	console.log(`client:${client}, user:${user}`);

	let shopping = groceries;
	groceries.totalPrice = '35';
	console.log(`groceries.totalPrice:${groceries.totalPrice},  shopping.totalPrice:${shopping.totalPrice}`);
	groceries.other.payed = false;
	console.log(`groceries.other.payed:${groceries.other.payed},  shopping.other.payed:${shopping.other.payed}`);
	
}
cloneGroceries();