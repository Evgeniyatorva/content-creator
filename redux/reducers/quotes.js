import { GET_QUOTES, GET_QUOTES_IS_LOADING, GET_QUOTES_ERROR } from '../consts';

const initialState = {
  quotes: [],
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES :
      return { ...state, quotes: action.payload }
    case GET_QUOTES_IS_LOADING :
      return { ...state, isLoading: action.payload }
    case GET_QUOTES_ERROR :
      return { ...state, error: action.payload }
    default :
      return state
  }
}