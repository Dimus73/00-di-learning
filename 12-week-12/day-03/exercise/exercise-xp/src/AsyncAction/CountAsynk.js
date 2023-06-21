// import {useSelector, useDispatch} from 'react-redux';


import {incrAsyncCount} from '../redux/actions'

export const asyncIncrement = () => {


	function delay (ms){
		return new Promise((resolve) => setTimeout(resolve,ms))
	}

	return function (dispatch) { 
		delay(2000)
		.then (data => dispatch (incrAsyncCount()) )
}
}


export default asyncIncrement