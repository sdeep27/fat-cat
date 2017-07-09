import {
  NEXT_CAT, 
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE
} from './actions';

const initialState = {
  allCats: [],
  index: 0,
  loading: true,
  error: false
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
      const newCats = action.response.data.map(item => item.images.fixed_height.url)
      return {
        ...state,
        loading: false,
        allCats: [...state.allCats, ...newCats]
      }
    case FETCH_CATS_FAILURE:
      return {
        ...state
      }
    default:
      return state;
      
  }
}