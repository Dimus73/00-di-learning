export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ODD = 'INCREMENT_ODD'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

const initState={
	count:0
}

export const reducer_count = (state=initState, action={}) => {
	switch (action.type) {
		case INCREMENT :
			return ( {...state, count: state.count+1 } )
		case INCREMENT_ODD :
			if (state.count % 2 == 0 ){
				return ( {...state, count: state.count+1 } )
			}
			return ( {...state} )
		case DECREMENT :
			return ( {...state, count: state.count-1 } )
		case INCREMENT_ASYNC :
			return ( {...state, count: state.count+1 } )
		
		default:
			return({...state})
	}
}