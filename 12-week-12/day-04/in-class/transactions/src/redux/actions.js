export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const UPDATE_INDEX = 'UPDATE_INDEX';
export const USERS = 'USERS'
export const PLUS = 'PLUS'
export const MINUS = 'MINUS'

export const getusers = () => (dispatch, getState) => {
  console.log(getState().currentIndex);
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    dispatch({type:USERS, payload:data})
  })
}

export const insert_trx = (trx) => {
  return {
    type: INSERT,
    payload: trx
  }
}

export const update_trx = (trx) => {
  return {
    type: UPDATE,
    payload: trx
  }
}

export const delete_trx = (indx) => {
  return {
    type: DELETE,
    payload: indx
  }
}

export const update_indx = (indx) => {
  return {
    type: UPDATE_INDEX,
    payload: indx
  }
}

export const decrement = () => {
  return {
    type: MINUS
  }
}
export const increment = () => (dispatch, getState) => {

  console.log(getState());
  setTimeout(()=>{
    dispatch({type:PLUS})
  },5000)
  // return {
  //   type: PLUS
  // }
}
