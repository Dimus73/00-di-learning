import logo from './logo.svg';
import './App.css';
import UserFavoriteColorsClass from'./Components/UserFavoriteColorsClass.js'
import UserFavoriteColors from'./Components/UserFavoriteColors.js'
import Exercise4 from './Components/Exercise4'

const baseApp =  () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  //  return baseApp();
//!!!!!!!!! Exerscise 002_001  
  //  return(
  //   "Hello word"
  //  )

//!!!!!!!!! Exerscise 002_001
  // const myelement = <h1>I Love JSX!</h1>
  // return myelement

//!!!!!!!!! Exerscise 002_003 
  // const sum = 5+5;
  // return (<h1>React is {sum} times better with JSX</h1>)

//!!!!!!!!! Exerscise 003_001  
  // return(
  //   <>
  //     <h3>Name:{user.firstName}</h3>
  //     <h3>Last name {user.lastName}</h3>
  //   </>
  // )

  //!!!!!!!!! Exerscise 003_002  
  // return(
  //   <>
  //     <h3>Name:{user.firstName}</h3>
  //     <ul>
  //       <UserFavoriteColorsClass user1={user}/>
  //       <li>-------</li>
  //       <UserFavoriteColors user1={user}/>
  //     </ul>
  //     <h3>Last name {user.lastName}</h3>
  //   </>
  // )

  //!!!!!!!!! Exerscise 004_001  
  return(
    <>
        <Exercise4 user1={user}/>
    </>
  )


}

export default App;
