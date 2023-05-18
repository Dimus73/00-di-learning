let w_string = prompt ("Enter words separated by commas");
let w_list = w_string.split(', ')
console.log (w_list);
let max_len=0;
let t=""
t.length
for (w of w_list ){
	max_len = max_len<w.length ? w.length : max_len 
}

for (w of w_string ){
	max_len = max_len<w.length ? w.length : max_len 
}

console.log('*'.repeat(max_len+3))
for (w of w_list){
	console.log('*' + w + " ".repeat(max_len-w.length+1) + '*')
}
console.log('*'.repeat(max_len+3))

