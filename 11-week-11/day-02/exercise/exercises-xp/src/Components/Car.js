import React from 'react'
import Garage from './Garage';

class Car extends React.Component{

	constructor(){
		super();
		this.state={color:'white'}
	}

	render() {
		console.log(this.props);
		return(
			<div>
				<Garage size= "small" />
				<div>This car is {this.state.color} {this.props.car.model}</div>
			</div>
		)
	}
}

export default Car