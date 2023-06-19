export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const SET_ITEM = 'SET_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

const initState = {
	// transactions:[{a:1,b:2,c:3}]
	transactions:[],
	item:{
		account:'',
		fsc:'',
		holder:'',
		amount:''
	},
}

export const reducer_list =(state=initState, action={}) => {
	switch (action.type) {
		case ADD_TRANSACTION :
			console.log('From reduser_list =>', action.payLoad);
			console.log('From reduser_list state =>', state);
			return ({...state, transactions:[ ...state.transactions ,action.payLoad]})
		case SET_ITEM :
			return ({...state, item:action.payLoad})
		case EDIT_ITEM :
			const key = action.payLoad.key;
			delete action.payLoad.key;
			return ({...state, transactions:state.transactions.map((value, i) => 
											i == key ? action.payLoad : value)})
		case DELETE_ITEM :
			return({...state, transactions:state.transactions.filter((value, i) => i != action.payLoad)})
		default:
			return({...state})
	}
}