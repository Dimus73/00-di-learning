
import './App.css';
import React, { useState } from 'react'

function App() { 
  const [count, setCount] = useState(()=> (4));

  function decrementCount(){
    // setCount(count-1);
    const ff = (a)=>(a-1);
    // setCount(prevCount => prevCount - 1)
    console.log("1:", count);
    setCount(ff);
    console.log("2:", count);
    setCount(ff);
    console.log("3:", count);
  }

  function incrementCount(){
    // setCount(count-1);
    const ff = (a)=>(a+1);
    setCount(ff);
  }



  return (
    <>
      {console.log('Call render', count)}
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>
    </>
    );
}

export default App;
