import logo from './logo.svg';
import './App.css';
import React from 'react'
import ErrorBoundary from './ErrorBoundary';
import Colors from './Components/Colors'
import ParentObj from './Components/DeletObj';

// class BuggyCounter extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       counte:0
//     }
//   }


//   render(){

//     const handleClick = ()=>{
//       this.setState((oldValue) => oldValue + 1)
//       this.setState({counte:(this.state.counte + 1)})
//     } 
    
//     if (this.state.counte > 5) {
//       throw Error ("Error (dima call): I crashed!")
//     }
    
//     return (
//       <h1 onClick={handleClick}>{this.state.counte}</h1>
//     )
//   }

// }

function App() {
  return (
// -------------- 01
    // <div className="App">
    //   <ErrorBoundary>
    //     <BuggyCounter />
    //     <BuggyCounter />
    //   </ErrorBoundary>
    //   <hr/>
    //   <ErrorBoundary>
    //     <BuggyCounter />
    //   </ErrorBoundary>
    //   <ErrorBoundary>
    //     <BuggyCounter />
    //   </ErrorBoundary>
    //   <hr/>
    //   <BuggyCounter />
    // </div>

// --------------02 03
    // <Colors />

// _______________ 04
    <ParentObj />
  );
}

export default App;
