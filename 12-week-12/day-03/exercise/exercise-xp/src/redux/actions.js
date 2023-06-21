 import {
	INCREMENT,
  DECREMENT,
	INCREMENT_ODD,
	INCREMENT_ASYNC
 } from './reduser_count'

 import {
	AGE_UP,
	AGE_DOWN
 } from './reduser_age'

 export const incrCount = () => {
	return({
		type: INCREMENT
	})
 }

 export const incrAsyncCount = () => {
	return({
		type: INCREMENT_ASYNC
	})
 }

 export const decrCount = () => {
	return({
		type: DECREMENT
	})
 }

 export const incrCountOdd = () => {
	return({
		type: INCREMENT_ODD
	})
 }

 //-------------------

 export const ageUp = () => {
	return({
		type: AGE_UP
	})
 }

 export const ageDown = () => {
	return({
		type: AGE_DOWN
	})
 }