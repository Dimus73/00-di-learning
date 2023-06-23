export const DELETE_ITEM ='DELETE_ITEM'
export const CHANGE_TEST ='CHANGE_TEST'

const initialState = {
	blogList: [
		{id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
		{id: '2', title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
		{id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
	],
	testValue:200,
}

export const reducer = (state = initialState, action ={}) => {
	switch (action.type) {
		case DELETE_ITEM :
			console.log('Reducer:', action.payLoad);
			console.log(state)
			const tList = state.blogList.filter((item) => item.id != action.payload)
			return({...state, blogList: tList})
		case CHANGE_TEST:
			return ({...state, testValue:state.testValue+200})
		default:
			return({...state})
	}
}