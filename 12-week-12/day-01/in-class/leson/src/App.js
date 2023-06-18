import React from 'react'
import useState from 'react'
import './App.css';
import Test from './Components/Test';

function App() {
  const[title, setTitle]=useState("Test")

  return (
    <div className="App">
      <header className="App-header">
        <Test title={title} />
      </header>
    </div>
  );
}

export default App;
