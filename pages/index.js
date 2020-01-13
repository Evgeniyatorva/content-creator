import React from 'react';
import { searchImageOnServer } from '../redux/actionCreators';
import { getQuotes } from '../redux/actionCreators';

import ImageSearch from '../components/ImageSearch';
import Editor from '../components/Editor';
import Quotes from '../components/Quotes';

const Home = () => {

  return ( 
    <div>     
      <ImageSearch  />
      <Editor />
      <Quotes />
    </div>
  )
}

Home.getInitialProps = async ({store}) => {
  await store.dispatch(searchImageOnServer('random'));
  await store.dispatch(getQuotes());
}  

export default Home