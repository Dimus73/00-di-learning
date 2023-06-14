import logo from './logo.svg';
import './App.css';
import Task1 from './Components/Task1';
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Task1 />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
