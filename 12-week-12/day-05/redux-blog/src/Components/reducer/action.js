import{
	DELETE_ITEM,
	CHANGE_TEST
} from './reducer'

export const deleteItem = (value) => {
	return({
		type:DELETE_ITEM,
		payload:value
	})
}

export const changeTest = (value) => {
	return({
		type:CHANGE_TEST,
		payload: value
	})
}