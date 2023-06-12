import React from 'react'


const ButtonUsersFunc = (props) => {

	const [userArr, setUserArr]= useState([])

	return(
		<>
		userArr.map((item,key) =>{
			return (
				<div>key</div>
			)
		})
		</>	
	)

}



class ButtonUsers extends React.Component{
	constructor() {
		super();
		this.state={
			usersLisr:[]
		}
	}

	allUsers = async (e) =>{
		e.preventDefault();
		console.log('Star function');
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		let resJs = await res.json()
		console.log(resJs);

	}
	

	render (){
		return(
			<input type="submit" value="Users" onClick={this.allUsers} />
		)
	}
}

export default ButtonUsersFunc