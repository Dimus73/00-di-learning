import React from 'react'

class Colors extends React.Component{
	constructor(){
		super ();
		this.state={favoriteColor:'red'}
	}

	componentDidMount(){
		setTimeout(()=> this.setState({favoriteColor:'yellow'}),5000)
	}

	shouldComponentUpdate(){

		// if (this.state.favoriteColor === 'blue'){
		// 	return false
		// }
		console.log("This is in 'shouldComponentUpdate'", this.state.favoriteColor);
		return true
	}


	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log("This is in 'getSnapshotBeforeUpdate'", this.state.favoriteColor);
		return null
	}


	componentDidUpdate(){
		console.log("This is in 'componentDidUpdate'", this.state.favoriteColor);

	}

	render(){
	  const colorToBlue = ()=>{
			this.setState({favoriteColor:'blue'})
		}
	
		// console.log(colorToBlue);
		return(
			<div>
				<h1>My Favorite Color is  
					<span style={{color:this.state.favoriteColor}}> {this.state.favoriteColor}</span>
				</h1>

				<input type="submit" value="Color" onClick={colorToBlue} />
			</div>
		)
	}
}

export default Colors;