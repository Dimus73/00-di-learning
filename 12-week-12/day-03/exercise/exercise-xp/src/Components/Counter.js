import {useSelector, useDispatch} from 'react-redux';
import { incrCount, decrCount, incrCountOdd } from '../redux/actions';
import asyncIncrement from '../AsyncAction/CountAsynk'


const Counter = () =>{

	const count = useSelector((state) => (state.reducer_count.count));
	const dispatch = useDispatch();
	const incrimentIfOdd = () => dispatch(incrCountOdd())
	
	

	return (
		<div>
			 
			<div>
				Clicke <span> {count} </span> times 
				<button onClick={() => dispatch(incrCount())}>+</button>
				<button onClick={() => dispatch(decrCount())}>-</button>
				<button onClick={incrimentIfOdd}>Increment if odd</button>
				<button onClick={() => dispatch(asyncIncrement()) }>Increment async</button>
			</div>
		</div>
		)
}

export default Counter