import { EDITOR_ADD_TEXT, EDITOR_DELETE_TEXT } from '../consts';

export let editorAddText = ({ text, x, y, id, draggable }) => {
  return {
    type: EDITOR_ADD_TEXT,
    payload: {
      text,
      x: x,
      y: y,
      id,
      draggable
    }
  }
}

export let editorDeleteText = (id) => {
  return {
    type: EDITOR_DELETE_TEXT,
    payload: id
  }
}