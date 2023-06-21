import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImagesList from './Components/ImagesList';
import Search from './Components/Searche';
import Beaches from './Components/Beaches';
import Birds from './Components/Birds';
import Food from './Components/Food';
import Mountain from './Components/Mountain';
import Home from './Components/Home';
import SearchPage from './Components/SearchPage';

import Layout from './Components/Layout';

import { createContext, useState, useEffect } from "react"

export const AppContext = createContext();


function App() {

  return (
    <>
      {/* <div className='container'>
        <div className={'row'}>
          <div className={'col-12'}>
            <AppContext.Provider value={{imgList, setImgList}}>
              <Search />
              <ImagesList />
            </AppContext.Provider>
          </div>
        </div>
      </div> */}
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/search/:sStr" element={ <SearchPage /> } />
          <Route path="/mountain" element={ <Mountain /> } />
          <Route path="/beaches" element={ <Beaches /> } />
          <Route path="/birds" element={ <Birds /> } />
          <Route path="/food" element={ <Food /> } />
          <Route path="*" element={ <Home /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//className="App"