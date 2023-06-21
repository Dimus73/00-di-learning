export const AGE_UP = 'AGE_UP';
export const AGE_DOWN = 'AGE_DOWN';

const initState = {
	age:20
}

export const reducer_age = (state = initState, action = {}) => {
switch (action.type){
	case AGE_UP :
		return({...state, age : state.age+1})
	case AGE_DOWN :
			return({...state, age : state.age-1})
	default:
		return ({...state})
	}
}