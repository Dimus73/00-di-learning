import{Routes, Route, Link} from 'react-router-dom'
import Layout from './Components/Layout';


import logo from './logo.svg';
import './App.css';

import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

import { Form } from 'react-router-dom';

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element = {<Layout />}>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/:id" element = {<Post />} />
          </Route>
        </Routes>
      </>
  );
}
export default App;
