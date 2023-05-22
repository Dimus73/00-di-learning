//01
const select=document.querySelector('#genres');
option = document.createElement('option');
option.value = 'clssic';
option.textContent = 'clssic';
select.appendChild(option)
select.value = 'clssic';

select.addEventListener('change',function(e){
	console.log (e);
	console.log("Current selection", e.target.value);
})

//02
const form = document.body.getElementsByTagName('form');
console.log("Form", form[0]);
const buttonSR = form[0].getElementsByTagName('input');
console.log("Button", buttonSR[0]);

buttonSR[0].addEventListener('click', removeColor);

function removeColor(e){
	console.log(e);
	let selectElement = e.target.previousElementSibling;
	let colorToRemove = selectElement.value;
	let options = selectElement.getElementsByTagName('option');
	for (o of options){
		if (o.textContent === colorToRemove){
			selectElement.removeChild(o);
		}
	}
}

//03
let shoppingList = [];
let shoppingListLi = [];
const body = document.body;
const newForm = document.createElement('form');
body.appendChild(newForm);

const inputTag = document.createElement('input');
inputTag.setAttribute('type','text');
inputTag.setAttribute('id','itemInput');
inputTag.setAttribute('name','itemText');
const inputTagLable = document.createElement('lable');
inputTagLable.setAttribute('for','itemInput');
inputTagLable.textContent = 'Enter item';
newForm.appendChild(inputTagLable);
newForm.appendChild(inputTag);

const newButtAdd = document.createElement('button');
newButtAdd.setAttribute('type','submit');
newButtAdd.setAttribute('onclick','addItem(event)');
newButtAdd.textContent = 'Add Item';
newForm.appendChild(newButtAdd);

const newButtClear = document.createElement('button');
newButtClear.setAttribute('type','submit');
newButtClear.setAttribute('onclick','clearItem(event)');
newButtClear.textContent = 'ClearAll';
newForm.appendChild(newButtClear);

const p = document.createElement('p');
p.textContent = 'Your list:'
body.appendChild (p);
const ol = document.createElement('ol');
body.appendChild(ol);

function addItem(e){
	e.preventDefault();
	let item = newForm.elements.itemText.value;
	newForm.elements.itemText.value ='';
	item = checkItem(item); 
	if (item){
		shoppingList.push(item)
		let li = document.createElement('li');
		shoppingListLi.push(li);
		li.textContent = item;
		ol.appendChild(li);
	};
}

function clearItem(e){
	e.preventDefault();
	shoppingList=[];
	for (l of shoppingListLi){
		ol.removeChild(l);
	}
}

function checkItem(item){
	let testItem = item.trim();
	return (item !='' && testItem === item) ? testItem:false;
}

