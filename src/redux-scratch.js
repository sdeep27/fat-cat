import {createStore, applyMiddleware, combineReducers} from 'redux';

const load_imgs = () => { //action creators
  return { //action objects
    type: 'LOAD_IMGS',
  }
}

const next = (index) => {
  return {
    type: 'NEXT',
    index
  }
}

const offset = (offset) => {
  return {
    type: 'OFFSET',
    offset
  }
}
/////
const initialState = {
  imgs: [],
  currentImg: -1,
  offset: 0
}
////
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT':
      return
    default:
      return state;
  }
  
}