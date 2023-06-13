import React from 'react'

class Colors extends React.Component{
	constructor(){
		super ();
		this.state={favoriteColor:'red'}
	}

	componentDidMount(){
		setTimeout(()=> this.setState({favoriteColor:'yellow'}),5000)
	}


	render(){
	  const colorToBlue = ()=>{
			this.setState({favoriteColor:'blue'})
		}
	
		console.log(colorToBlue);
		return(
			<div>
				<h1>My Favorite Color is {this.state.favoriteColor}this</h1>
				<input type="submit" value="Color" onClick={colorToBlue} />
			</div>
		)
	}
}

export default Colors;