import React from 'react'

class Hello extends React.Component{

	componentWillUnmount(){
		alert('The Hello will be deleted')
	}


	render(){
		return(
			<h1>Hello Word!</h1>
		)
	}
}

class ParentObj extends React.Component{
	constructor(){
		super();
		this.state = {show:true}
	}

	render(){

		const deleteFunc = () => {
			this.setState({show:false});
		}	

		return(
			<div>
				{(this.state.show) ? 
					(<Hello />):
					(<p>--</p>)
				}
				<input type="submit" value="Delete" onClick={deleteFunc}/>
			</div>
		)
	}
}

export default ParentObj