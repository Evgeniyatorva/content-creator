import { SELECT_SHAPE_IN_EDITOR } from '../consts';

export let selectShapeInEditor = (id) => {
  return {
    type: SELECT_SHAPE_IN_EDITOR,
    payload: id
  }
}