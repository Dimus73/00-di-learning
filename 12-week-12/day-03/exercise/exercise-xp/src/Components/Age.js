import {useSelector, useDispatch} from 'react-redux';
import { ageUp, ageDown } from '../redux/actions';


const Age = () => {

	const age = useSelector((state)=>(state.reducer_age.age))
	const dispatch = useDispatch();

	return(
		<div>
			<div>Current AGE:</div>
			<div style={{fontSize:'50px'}}> {age} </div>
			<button onClick={()=>dispatch(ageUp())}>AGE UP</button>
			<button onClick={()=>dispatch(ageDown())}>AGE DOWN</button>
		</div>
	)
}

export default Age