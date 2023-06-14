import './App.css';

import Home from './Components/Home';
import Profile from './Components/Profile';
import Shop from './Components/Shop';
import ErrorBoundary from './ErrorBoundary';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';
import Exercise4 from './Components/Exercise4';

import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Data2 from './test1.json'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to='/' > Home </Link>
          <Link to='/profile' > Profile </Link>
          <Link to='/shop' > Shope </Link>
        </nav>
        <Routes>
          <Route path='/' element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
                }> </Route>
          <Route path='/profile' element={
                <ErrorBoundary>
                  <Profile />
                </ErrorBoundary>
                }></Route>
          <Route path='/shop' element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
      <PostList />
      <br />  <br />
      <hr />
      <ul>
        {Data2.SocialMedias.map((value,key) => <Example1 smName={value} key={key} /> )  }
      </ul>
      <br />  <br />
      <hr /> 
        {Data2.Skills.map((value,key) =><Example2 skill={value} key={key} /> )  }
      <br />  <br />
      <hr />
      <hr /> 
        {Data2.Experiences.map((value,key) =><Example3 info={value} key={key} /> )  }
      <br />  <br />
      <hr />
      
      <Exercise4 />

    </div>
  );
}

export default App;
