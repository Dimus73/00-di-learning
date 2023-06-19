import logo from './logo.svg';
import './App.css';
import TransactionForm from './Components/TransactionForm'
import TransList from './Components/TransList';

function App() {
  return (
    <div className="App">
      <TransactionForm />
      <TransList />
    </div>
  );
}

export default App;
