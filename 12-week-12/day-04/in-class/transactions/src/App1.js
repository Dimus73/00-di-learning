import {createContext, useState} from 'react';
import Name from './components/Name'

import './App.css';

export const AppContext = createContext()

function App() {

  const [name, setName] = useState('John');
  const [count, setCount] = useState(10);

  return (
    <AppContext.Provider value={{name,setName,count, setCount}}>
      <div className="App">
        <h1>useRef</h1>
        <Name/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
