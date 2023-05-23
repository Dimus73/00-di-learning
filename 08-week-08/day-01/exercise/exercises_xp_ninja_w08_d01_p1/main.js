function calculateTip(e){
	elements = e.target.parentElement;
	console.log(e, elements);

	let billAmount = document.querySelector('#billamt').value;
	let serviceQuality = document.querySelector('#serviceQual').value;
	let numberOfPeopleTag = document.querySelector('#peopleamt');
	let numberOfPeople = Number(numberOfPeopleTag.value);
	let totalTipTag = document.querySelector('#totalTip')
	let TipTag = document.querySelector('#tip')
  console.log(billAmount, typeof serviceQuality, serviceQuality, typeof numberOfPeople, numberOfPeople);
	if (billAmount === "" || serviceQuality == 0){
		alert ("Enter bil ammount and service");
	}
	each = document.querySelector("#each");
	if (!(numberOfPeople>1)){
		console.log('Go each');
		numberOfPeopleTag.value = 1;
		numberOfPeople = 1;
		each.style.display = 'none';
	} else {
		console.log('Go NO each');
		each.style.display = null;
	}
	let total = billAmount*(1+serviceQuality)/numberOfPeople;
	total = total.toFixed(2);
	totalTipTag.style.display='block'
	TipTag.textContent = total;

}
