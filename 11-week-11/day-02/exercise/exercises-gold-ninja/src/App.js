import './App.css';
import Forms from './Components/Forms';

const formInfo = [
  {
    name:"First name",
    validation:"",
    required:{isRequired:true,message:"First name is required"},
    message:""
  },
  {
    name:"Lst name",
    validation:"",
    required:{isRequired:true,message:"Lst name is required"},
    message:""
  },
  {
    name:"Phone",
    validation:"/^\\d{3}-\\d{3}-\\d{4}$/",
    required:{isRequired:true,message:"Phone is required"},
    message:"Phone number is invalid"
  },
  {
    name:"Email",
    validation:"/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/",
    required:{isRequired:true,message:"Email is required"},
    message:"Email invalid"
  },
]

function App() {
  return (
    <Forms formInfo={formInfo}/>
    );
}

export default App;
