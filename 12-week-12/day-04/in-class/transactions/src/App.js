import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from './redux/actions'

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const plus = () => {
    dispatch(increment())
  }

  const minus = () => {
    dispatch(decrement())
  }

  return (
      <div className="App">
      <h1>Counter</h1>
        <button onClick={minus}> - </button>
        {count}
        <button onClick={plus}> + </button>
      </div>

  );
}

export default App;
