import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import ErrorBoundary1 from './ErrorBoundary1'

function App() {
  return (
      <>
        <h1>---RRRRRR---</h1>
        <button  onClick={() =>{throw Error('Error from button ')}}>Occur an Error </button>
        <Test />
      </>
  );
}

export default App;
