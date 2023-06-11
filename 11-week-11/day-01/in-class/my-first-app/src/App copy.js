import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
// import User 
import robots from './users.json'

console.log(robots);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Hello />
      </header>
    </div>
  );
}

export default App;
