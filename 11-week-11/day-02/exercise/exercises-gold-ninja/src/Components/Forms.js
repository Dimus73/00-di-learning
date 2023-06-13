 import React from 'react';
 import Input from './Input';

 class Forms extends React.Component{

	constructor(){
		super();
		const a=1;
		console.log(this.props);
	}

	render(){
		// console.log(this.props);
		const {formInfo} = this.props
		console.log(formInfo)

		return(
			<div>
				<h1> It's FORM</h1>
				{
				formInfo.map((value,key) => {
					return(
						<Input fields = {value} />
					)
				})
				}
			</div>
		)
	}

 }

 export default Forms