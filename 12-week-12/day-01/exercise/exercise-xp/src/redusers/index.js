import {createStore} from 'redux'

// action ={type:"" payload:""}
const defaultState ={
	count:100,
}

const reducer = (state = defaultState, action) =>{
	switch (action.type) {
		case "INCREASE":
			return {...state, count:state.count+action.payload}
	
		case "DECREASE":
			return {...state, count:state.count-action.payload}

		default:
			return state

	}
}

const store = createStore(reducer)

export {store} 