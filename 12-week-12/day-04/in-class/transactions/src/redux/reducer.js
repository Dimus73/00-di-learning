import {INSERT,UPDATE,DELETE,UPDATE_INDEX,USERS,PLUS,MINUS} from './actions';
import {addToLocalStorage, getFromLocalStorage} from '../utils/storage'

const initState = {
  list: getFromLocalStorage('transactions'),
  currentIndex: -1,
  users:[],
  count: 0
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case USERS:
      return {...state, users:action.payload}
    case INSERT:
      state.list.push(action.payload)
      addToLocalStorage('transactions', [...state.list])
      return {...state, list: [...state.list], currentIndex:-1}

    case UPDATE:
      state.list[state.currentIndex] = action.payload
      addToLocalStorage('transactions', [...state.list])
      return {...state, list:[...state.list], currentIndex:-1}

    case UPDATE_INDEX:

      return {...state, currentIndex:action.payload}

    case DELETE:
      state.list.splice(action.payload, 1)
      addToLocalStorage('transactions', [...state.list])
      return {...state, list:[...state.list], currentIndex:-1}


    case PLUS:
      return {...state, count: state.count + 1}
    case MINUS:
      return {...state, count: state.count - 1} 
    default:
      return {...state}
  }
}
