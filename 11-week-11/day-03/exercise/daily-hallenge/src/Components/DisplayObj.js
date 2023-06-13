import React from "react";

class DisplayObj extends React.Component{

	render(){
		// console.log(this.props.valuesField, this.valuesField);
		// console.log("valuesField", this.props.valuesField);
		let valuesField = this.props.valuesField
		return(
			<div className="entered-info">
				<h2>Entered information:</h2>
				<p>Your name: {valuesField.firstName + ' ' + valuesField.lastName} </p>
				<p>Your age: {valuesField.age}</p>
				<p>Your gender: {valuesField.gender}</p>
				<p>Your destination: {valuesField.destination}</p>
				<p>Your dietary restrictions: </p>
				<div className="restrictions">
					<span>**Nuts free: {valuesField.nutsFree} </span>
					<br />
					<span>**Lactose free: {valuesField.lactoseFree}</span>
					<br />
					<span>**Vegan meal: {valuesField.isVegan}</span>
				</div>
			</div>
		)
	}
}

export default DisplayObj