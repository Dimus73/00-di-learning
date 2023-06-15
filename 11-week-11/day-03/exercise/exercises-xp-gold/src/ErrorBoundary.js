import React from 'react'
 
class ErrorBoundary extends React.Component{
	constructor(){
		super();
		this.state={
			"hasError":false
		}
	}
	occurError () {
		console.log('test');
	}
	componentDidCatch(error, errorInfo){
		this.occurError()
    // console.log('error=>',error);
    // console.log('errorInfo=>', errorInfo);		
	}
	
	render(){
		console.log(this.props);
		if (!this.state.hasError){
			return this.props.children
		} 
		return (
			<h1>No button</h1>
		)
	}
}

export default ErrorBoundary