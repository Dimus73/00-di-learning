import { createStore, applyMiddleware } from "redux";
// import { reducer_count } from "./reduser_count";
import { rootReducer } from "./reduser_root";
import thunk from 'redux-thunk'

const logPrint = (store) => (next) => (action) => {
	
		console.log("This is Middleware");

		next(action)

	
}

const store = createStore(rootReducer, applyMiddleware(logPrint, thunk) )

export default store;