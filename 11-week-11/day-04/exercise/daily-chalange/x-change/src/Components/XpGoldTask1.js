import React from 'react'

class XpGoldTask1 extends React.Component{
	constructor(){
		super()
		this.state = {
			username:"",
			email:""
		}
	}

	render(){
		const dataSend = async (e) =>{
			e.preventDefault();
			const URL = 'https://jsonplaceholder.typicode.com/users/';
			const sData={
				method:'POST',
				headers:{
					'Content-Type': 'application/json'
				},
				body:JSON.stringify({'username':this.state.username, 'email':this.state.email })
			};

			let res = await fetch(URL, sData);
			let resJs = await res.json();
			console.log(resJs);
	
		}
		return(
			<div>
				<form action="" onSubmit={dataSend}>
					<span>Username:</span>
					<input type="text" name="username" onChange={(e)=>this.setState({username:e.target.value})}/>
					<br />
					<span>E-Mail:</span>
					<input type="text" name='email' onChange={(e)=>this.setState({email:e.target.value})} />
					<br />
					<input type="submit" value="Send data" />
				</form>
				<br /><br />
				<p>Username:{this.state.username} Email:{this.state.email}</p>
			</div>
		)
	}
}

export default XpGoldTask1