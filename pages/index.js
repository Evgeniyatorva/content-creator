import React from 'react';
import { searchImageOnServer } from '../redux/actionCreators';

import ImageSearch from '../components/ImageSearch';
import Editor from '../components/Editor';

const Home = () => {

  return ( 
    <div>     
      <ImageSearch  />
      <Editor />
    </div>
  )
}

Home.getInitialProps = async ({store}) => {
  await store.dispatch(searchImageOnServer('random'));
}  

export default Home