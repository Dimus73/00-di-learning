import logo from './logo.svg';
import './App.css';
import ButtonObj from './Components/ButtonObj';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (

    <div>
      <ErrorBoundary zzz={{a:1,b:2,c:3}} >
          <ButtonObj />
          <ButtonObj />
      </ErrorBoundary>
    </div>
    );
}

export default App;
  