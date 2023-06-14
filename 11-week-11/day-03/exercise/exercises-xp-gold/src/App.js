import logo from './logo.svg';
import './App.css';
import ButtonObj from './Components/ButtonObj';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (

    <div>
      <ErrorBoundary>
          <ButtonObj />
          <ButtonObj />
      </ErrorBoundary>
    </div>
    );
}

export default App;
 