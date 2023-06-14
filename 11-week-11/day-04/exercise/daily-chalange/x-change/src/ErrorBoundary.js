import React from 'react';
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error,errorInfo) {
    console.log('error=>',error);
    console.log('errorInfo=>', errorInfo);
    this.setState({hasError:true})
  }

  render(){
    if(this.state.hasError){
      return (
				<h1>Error with server connection</h1>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
