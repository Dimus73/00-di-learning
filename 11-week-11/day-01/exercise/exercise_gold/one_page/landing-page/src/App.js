import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <>
        <i className="fa-solid fa-user"></i>
        <i className="fa-regular fa-user"></i>
        <i className="fa-light fa-user"></i>
        <i className="fa-thin fa-user"></i>
        <i className="fa-duotone fa-user"></i>

        <i className="fa-brands fa-font-awesome"></i>

        <i className="fa-sharp fa-solid fa-user"></i>

        <i className="fa-sharp fa-regular fa-user"></i>

        <FontAwesomeIcon icon={faBuilding} />
        <div className="small-div">
            <i className="fa fa-building"></i>
            <img src="./" width="100" height="100" alt=""/>
        </div>
    </>
    );
}

export default App;
