import {combineReducers} from 'redux'
import { reducer_age } from './reduser_age'
import { reducer_count } from './reduser_count'

export const rootReducer = combineReducers({reducer_age, reducer_count});
