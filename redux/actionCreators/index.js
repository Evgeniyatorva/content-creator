import { SEARCH_IMAGE_ADD, 
         SEARCH_IMAGE_IS_LOADING, 
         DEFAULT_SEARCH_IMAGE,
         SELECT_IMAGE } from '../consts';

// import fetch for Unsplash
import Unsplash, { toJson } from 'unsplash-js';
import fetch from 'node-fetch';
global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: "a106b3d3c7aa180b42fc85eb3696c576e45831d87a44960e5ae1594b08f3f5f6" });

let defaultSearchImageAdd = (result) => {
  return {
    type: DEFAULT_SEARCH_IMAGE,
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

export let selectImage = (id) => {
  return {
    type: SELECT_IMAGE,
    payload: id
  }
}

// fetch query image
let fetchImage = (actionisLoad, actionAdd, dispatch, search) => {
  dispatch(actionisLoad(true))
  
  return unsplash.search.photos(search, 1)
    .then(toJson)
    .then(data => { 
      dispatch(actionisLoad(false))    
      dispatch(actionAdd(data))
    })
}

// fetch query on client
export let searchImage = (search) => (dispatch) => {
  return fetchImage(searchImageIsLoading ,searchImageAdd, dispatch, search)
} 

// fetch query on server
export let searchImageOnServer = (search) => (dispatch) => {
  return fetchImage(searchImageIsLoading ,defaultSearchImageAdd, dispatch, search)
} 
 
