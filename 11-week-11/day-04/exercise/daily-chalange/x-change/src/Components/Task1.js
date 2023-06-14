import React from 'react'
import {useState, useEffect} from 'react'


const Task1 = () =>{
	const[word, setWord] = useState('test') 
	const[answ, setAnsw] = useState('waiting') 

	const getData = async () => {
		try {
			let res = await fetch('http://127.0.0.1:3050/api/hello/')
			if (res.ok){
				let resText = await res.text()
				console.log(resText);
				setWord(resText)
	
			} else {
				console.log('Status:', res.status);
				throw Error(`Server error. Status: ${res.status}`)
			}
				
		} catch (error) {
			throw Error('Server error')
		}
	}
	
	const sendServ = async (e) => {
		e.preventDefault();

		console.log('FORM', e.target.elements.text_input.value);
		const sData={
			method:'POST',
			// mode: 'no-cors',
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({'word':e.target.elements.text_input.value})
		}
		console.log('sData', sData);
		// const res = await fetch('https://webhook.site/cf0d2607-936c-4c17-8053-c96d981d76f1', sData)
		const res = await fetch('http://127.0.0.1:3050/api/word/', sData)
		const resTXT = await res.text();
		console.log('From server:', resTXT);
		setAnsw(resTXT)

	}
	
	return(
		<>
			<h1>Hello</h1>
			<h2> { word } </h2>
			<button onClick={getData}>Server</button>
			<form onSubmit={sendServ}>
				<input type="text" name="text_input" />
				<input type="submit" value = "Send" />
			</form>
			<h1>{answ}</h1>
		</>
	)
}

export default Task1