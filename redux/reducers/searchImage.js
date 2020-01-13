import { SEARCH_IMAGE_ADD, 
         SEARCH_IMAGE_IS_LOADING, 
         SEARCH_IMAGE_ERROR,
         DEFAULT_SEARCH_IMAGE_ADD, 
         SELECT_IMAGE } from '../consts';

const initialState = {
  result: [],
  isLoading: false,
  error: null,
  defaultResult: [],
  selectImage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
      case SEARCH_IMAGE_ADD :
        return { ...state, result: action.payload }
      case SEARCH_IMAGE_IS_LOADING:
        return { ...state, isLoading: action.payload }
      case SEARCH_IMAGE_ERROR :
        return { ...state, error: action.payload }
      case DEFAULT_SEARCH_IMAGE_ADD :
        return { ...state, defaultResult: action.payload }
      case SELECT_IMAGE :
        return { ...state, 
                selectImage: state.result.length !== 0 ? 
                             state.result.filter(item => item.id === action.payload) : 
                             state.defaultResult.filter(item => item.id === action.payload) 
                }
      default:
          return state
  }
};