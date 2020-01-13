import { GET_QUOTES, GET_QUOTES_IS_LOADING, GET_QUOTES_ERROR } from '../consts';

import quotes from '../../quotes.json';

let getQuotesAdd = (data) => {
  return {
    type: GET_QUOTES,
    payload: data
  }
}

let getQuotesIsLoading = (bool) => {
  return {
    type: GET_QUOTES_IS_LOADING,
    payload: bool
  }
}

let getQuotesError = (error) => {
  return {
    type: GET_QUOTES_ERROR,
    payload: error
  }
}


export let getQuotes = () => (dispatch) => {
  dispatch(getQuotesIsLoading(true))
  return new Promise((resolve) => {
                setTimeout(() => resolve(quotes), 3000)
              })
              .then(data => {
                dispatch(getQuotesIsLoading(false))
                dispatch(getQuotesAdd(data))
              })
              .catch(error => {
                dispatch(getQuotesIsLoading(false))
                dispatch(getQuotesError(error))
              })
}

