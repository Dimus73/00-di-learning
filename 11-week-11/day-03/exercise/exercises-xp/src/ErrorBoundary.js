import React from 'react'

class ErrorBoundary extends React.Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		}
	}


	componentDidCatch(error, errorInfo) {
		this.setState({hasError:true});
	}

	render(){
		if (this.state.hasError){
			return(
				<h1>We have an Error</h1>
		)} else {
				console.log('dddddd');
				return this.props.children
			}
	}
	
}
export default ErrorBoundary