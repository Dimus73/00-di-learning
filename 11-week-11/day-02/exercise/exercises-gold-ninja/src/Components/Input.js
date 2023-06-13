import React from 'react'

class Input extends React.Component{

	constructor (){
		super();
		this.state={
			v_message:true,
			v_text:''
		}
		
	}
	
	componentDidMount = () => {
		const {fields} = this.props;
		if (this.state.v_message){
			this.setState({v_text:fields.required.message}) 
		} else {
			this.setState({v_text:""}) 

		}
	}

	render (){

		
		console.log('In input', this.props);

		return(
			<div>
				<label  >{this.props.fields.name}</label>
				<input type="text"  />
				<div> {this.state.v_text} </div>
			</div>
		)
	}
}

export default Input