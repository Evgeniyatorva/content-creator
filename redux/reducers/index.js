import { combineReducers } from 'redux';

import searchImage from './searchImage';
import getQuotes from './quotes';

export default combineReducers({
  searchImage,
  getQuotes
}) 