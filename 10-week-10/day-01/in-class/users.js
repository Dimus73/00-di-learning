const user_fn = async (url)=>{
	res = await fetch(url);
	res_js = res.json();
	return res_js;
}

module.exports = {
	user_fn
}

