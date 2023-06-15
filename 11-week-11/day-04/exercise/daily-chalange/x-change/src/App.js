import logo from './logo.svg';
import './App.css';
import Task1 from './Components/Task1';
import ErrorBoundary from './ErrorBoundary'
import XpGoldTask1 from './Components/XpGoldTask1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Task1 />
        </ErrorBoundary>
          <XpGoldTask1 />
      </header>
    </div>
  );
}

export default App;
