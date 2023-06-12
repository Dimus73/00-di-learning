import React from 'react'


class ButtonUsers extends React.Component{

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

export default ButtonUsers