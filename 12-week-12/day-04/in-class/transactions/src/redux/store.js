import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducer';
import thunk from 'redux-thunk'

// => action => middleware => reducer
// const logger = (store) => (next) => (action) => {
//   console.log('prev state=>', store.getState());
//   console.log('action=>', action);
//   next(action)
//   console.log('current state=>', store.getState());
// }

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
