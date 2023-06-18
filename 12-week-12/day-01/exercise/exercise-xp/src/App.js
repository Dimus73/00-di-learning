import logo from './logo.svg';
import './App.css';
import { store } from '../src/redusers/index';
import {useDispatch, useSelector} from 'react-redux'


function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.count)
  console.log('This is count:', count);

    const addCount = ()=>{
      dispatch({type:"INCREASE",payload:1})
    }

    const decCount = ()=>{
      dispatch({type:"DECREASE",payload:1})
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <h1>The count: {count}</h1>
        <button onClick={()=>decCount()}>-</button>
        <button onClick={()=>addCount()}>+</button>
      </header>
    </div>
  );
}

export default App;
