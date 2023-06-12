import React from 'react'

class Phone extends React.Component{
	constructor (){
		super();
		this.state = {
			brand: "Samsung",
			model: "Galaxy S20",
			color: "black",
			year: 2020
	};
	}


	render (){

		const Color = ()=>{
			if (this.state.color === "black"){
				this.setState({color:"blue"})
			}
			else {
				this.setState({color:"black"})
			}
		}
	
		return(
			<div style={{display:'inline-block', textAlign:'center', width:'500px'}}>
				<h1 style={{display:'inline-block'}}>My phone is a {this.state.brand}</h1>
				<h3 style={{display:'inline-block'}}>
					It is {this.state.color} {this.state.model} from {this.state.year}
				</h3>
				<br/>
				<input type="submit" onClick={Color} value='Color' />
			</div>
		)
	}


}

export default Phone;