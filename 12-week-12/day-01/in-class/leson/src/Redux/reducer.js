const initState = {
	property_one:'text from redux'
}

export const reduser = (state=initState, action) => {
	return{...state}
}