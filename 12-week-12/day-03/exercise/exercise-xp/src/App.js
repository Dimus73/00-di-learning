import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Age from './Components/Age'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <br /> <br /> <br />
        <Age />
      </header>
    </div>
  );
}

export default App;
