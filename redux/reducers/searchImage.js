import { SEARCH_IMAGE_ADD, 
         SEARCH_IMAGE_IS_LOADING, 
         DEFAULT_SEARCH_IMAGE, 
         SELECT_IMAGE } from '../consts';

let initialState = {
  result: [],
  isLoading: false,
  defaultResult: [],
  selectImage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
      case SEARCH_IMAGE_ADD :
        return { ...state, result: action.payload }
      case SEARCH_IMAGE_IS_LOADING:
        return { ...state, isLoading: action.payload };
      case DEFAULT_SEARCH_IMAGE :
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