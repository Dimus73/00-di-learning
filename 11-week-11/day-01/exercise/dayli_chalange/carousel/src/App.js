import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <Carousel>
    <div>
        <img src="/1.jpg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="/2.jpg" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="/3.jpg" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src="/4.jpg" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
);
}

export default App;


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}
