import { SEARCH_IMAGE_ADD, 
         SEARCH_IMAGE_IS_LOADING, 
         SEARCH_IMAGE_ERROR,
         DEFAULT_SEARCH_IMAGE_ADD,
         SELECT_IMAGE } from '../consts';

// library for fetch from Unsplash
import Unsplash, { toJson } from 'unsplash-js';
// import fetch for Unsplash
import fetch from 'node-fetch';
global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: "a106b3d3c7aa180b42fc85eb3696c576e45831d87a44960e5ae1594b08f3f5f6" });

let defaultSearchImageAdd = (result) => {
  return {
    type: DEFAULT_SEARCH_IMAGE_ADD,
    payload: result.results ? result.results : null
  }
}

let searchImageAdd = (result) => {
  return {
    type: SEARCH_IMAGE_ADD,
    payload: result.results ? result.results : null
  }
}

let searchImageIsLoading = (bool) => {
  return {
    type: SEARCH_IMAGE_IS_LOADING,
    payload: bool
  }
}

let searchImageError = (error) => {
  return {
    type: SEARCH_IMAGE_ERROR,
    payload: error
  }
}

export let selectImage = (id) => {
  return {
    type: SELECT_IMAGE,
    payload: id
  }
}

// fetch query image
let fetchImage = (actionIsLoad, actionAdd, dispatch, search) => {
  dispatch(actionIsLoad(true))
  
  return unsplash.search.photos(search, 1)
    .then(toJson)
    .then(data => { 
      dispatch(actionIsLoad(false))    
      dispatch(actionAdd(data))
    }).catch(error => {
      dispatch(actionIsLoad(false)) 
      dispatch(searchImageError(error))
    });
}

// fetch query on client
export let searchImage = (search) => (dispatch) => {
  return fetchImage(searchImageIsLoading ,searchImageAdd, dispatch, search)
} 

// fetch query on server
export let searchImageOnServer = (search) => (dispatch) => {
  return fetchImage(searchImageIsLoading ,defaultSearchImageAdd, dispatch, search)
} 
 
