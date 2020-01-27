import { EDITOR_ADD_TEXT, EDITOR_DELETE_TEXT } from '../consts';

const initialState = {
  texts: [{
    text: 'some text',
    y: 40,
    x: 10,
    id: new Date().getTime() + 'text',
    draggable: true
  }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EDITOR_ADD_TEXT :
      return { ...state, texts: [... state.texts,  action.payload] }
    case EDITOR_DELETE_TEXT :
      return { ...state, texts: state.texts.filter(item => item.id !== action.payload) }
    default :
      return state
  }
}