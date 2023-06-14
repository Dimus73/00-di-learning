
const d ={
	key1: 'myusername',
	email: 'mymail@gmail.com',
	name: 'Isaac',
	lastname: 'Doe',
	age: 27
}
const sendData = async () =>{
	const postData = {
		method:'POST',
		mode: 'no-cors',
		header:{
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(d)
	}

	const URL = 'https://webhook.site/cf0d2607-936c-4c17-8053-c96d981d76f1'

	let res = await fetch(URL, sendData);
	console.log(res);
	console.log(d);

}

const Exercise4 = () =>{
	
	return (

		<button onClick={sendData}>Send data to url</button>
	)
}

export default Exercise4
