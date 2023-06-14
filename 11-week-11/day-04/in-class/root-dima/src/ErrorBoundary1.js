import React from "react";
import Modal from './Components/Modal'

class ErrorBoundary1 extends React.Component{
	constructor(){
		super();
		this.state = {
			hasError:false
		}
	}

	componentDidCatch=(error, errorInfo)=>{
		// throw Error('Error from Error')
		console.log('Dima test rrr');
		console.log('error=>',error);
    console.log('errorInfo=>', errorInfo);
    this.setState({hasError:true})
 }

	render(){

			if (this.state.hasError){
				return (
					<Modal />		
				)
			}
			return(
				<div>
					<h2>Text from ErrorBoundary </h2>
					{this.props.children}

				</div>
				)
	}
}

export default ErrorBoundary1