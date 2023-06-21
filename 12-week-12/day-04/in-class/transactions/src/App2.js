import {createContext, useState, useRef} from 'react';

import './App.css';


function App() {

  let count = useRef(5)

  const username = useRef(null)
  const div = useRef(null)

  const addOne = () =>{
    // console.log(username.current.value)
    // username.current.focus()
    // div.current.style.color ='red'
    // let users = []
    // count.current = count.current + 1
    // console.log(count.current);
  }


  return (

      <div className="App" ref={div}>
        <input ref={username} />
        <h1>useRef</h1>
        <button onClick={addOne}> Add to Ref</button>
      </div>

  );
}

export default App;
