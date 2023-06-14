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

				<p>test</p>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary
