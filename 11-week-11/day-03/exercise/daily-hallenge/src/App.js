import logo from './logo.svg';
import './App.css';
import FormObject from './Components/FormObject';
import DisplayObj from './Components/DisplayObj'

function App() {
  return (
    <div className="App">
      <div id="root">
        <main>
          <h1>Sample form</h1>
          <FormObject />
        </main>
      </div>
    </div>
  );
}

export default App;
