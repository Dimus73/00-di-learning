import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet'

import Blocks from './Components/Blocks';

function App() {
  return (
    <div className="App">
      <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Helmet>
      <Blocks />
    </div>
  );
}

export default App;
