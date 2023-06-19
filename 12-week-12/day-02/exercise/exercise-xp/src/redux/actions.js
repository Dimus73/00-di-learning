import {
	ADD_TRANSACTION, 
	SET_ITEM, 
	EDIT_ITEM,
	DELETE_ITEM
} from './Redusers/reduser_list';


export const addTransaction = (value) => {
	return {
		type : ADD_TRANSACTION,
		payLoad : value,
	}
}

export const setItem = (value) =>{
	return {
		type : SET_ITEM,
		payLoad : value,
	}

}

export const editItem = value => {
	return {
		type : EDIT_ITEM,
		payLoad : value
	}
}

export const deleteItem = value => {
	return{
		type : DELETE_ITEM,
		payLoad : value
	}
}