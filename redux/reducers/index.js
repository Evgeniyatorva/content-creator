import { combineReducers } from 'redux';

import searchImage from './searchImage';
import getQuotes from './quotes';
import editorText from './editorText';
import selectShape from './selectShape';

export default combineReducers({
  searchImage,
  getQuotes,
  editorText,
  selectShape
}) 