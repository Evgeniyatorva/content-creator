import { SELECT_SHAPE_IN_EDITOR } from '../consts';

let initialState = {
  id: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHAPE_IN_EDITOR :
      return { ...state, id: action.payload }
    default :
      return state
  }
}