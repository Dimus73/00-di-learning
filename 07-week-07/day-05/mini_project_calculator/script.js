let entr_n1 = '';
let entr_n2 = '';
let stored_action = ''
let curent_enter = ''

// Function for typing numbers on a calculator
function number(ll){
	let div = document.getElementById('display')
	curent_enter+=ll.toString()
	div.innerText = curent_enter;
}

// A function for handling mathematical operations. 
//The calculator allows you to perform actions sequentially, 
//without regard to order (multiplication division)
function operator(action){
	if (stored_action === ''){
		stored_action = action;
		/*This is a test. If the operation is the first, the 
		value from the screen is entered into the first memory cell, 
		if the operation is not the first, the memory cells already 
		contain the value of the previous operation*/
		entr_n1 = (entr_n1 === '') ? curent_enter : entr_n1;
		curent_enter = '';
	} else {
		entr_n2 = curent_enter;
		res = calculate();
		stored_action = action;
		display_text(res)
		curent_enter =''
	}
}

//Handling pressing the "equals" key
function equal(){
	entr_n2 = curent_enter;
	stored_action = '='
	res = calculate();
	display_text(res)
}

//This function performs calculations. Changing the contents of memory cells
function calculate(){
	let res = 0;
	switch (stored_action){
		case '+':
			res = parseFloat(entr_n1) + parseFloat(entr_n2);
			break;
		case '-':
			res = parseFloat(entr_n1) - parseFloat(entr_n2);
			break;
		case 'x':
			res = parseFloat(entr_n1) * parseFloat(entr_n2);
			break;
		case '/':
			res = (parseFloat(entr_n2) !=0) ? (parseFloat(entr_n1) / parseFloat(entr_n2)) : 0;
			break;
		case '=':
			res = parseFloat(entr_n1)
			break;
	}
	entr_n1 = res.toString();
	curent_enter = entr_n1;
	entr_n2 = '';
	stored_action = '';
	return res;
}

//This function displays information on the screen.
function display_text(res){
	let div = document.getElementById('display');
	div.innerText = res.toString();
}

function reset(){
	entr_n1 = '';
	entr_n2 = '';
	stored_action = '';
	curent_enter = '';
	display_text('0');
}

function clear_f(){
	console.log("dddddd");
	curent_enter = '';
	display_text(0);
}
