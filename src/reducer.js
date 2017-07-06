import {
  NEXT_CAT, 
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE
} from './actions';

const initialState = {
  allCats: [],
  index: 0,
  loading: true
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_CAT:
      return {
        ...state,
        index: state.index + 1
      }
    case FETCH_CATS_REQUEST:
      return {
        ...state, 
        loading: true 
      }
    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        allCats: [...state.allCats, ...action.newCats]
      }
    default:
      return state;
      
  }
}