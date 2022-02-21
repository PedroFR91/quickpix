import React from 'react';
import Body from './Body';
import Header from './Header';
import PopUp from './PopUp';

function BackContainer() {
  return (
    <div className='backcontainer'>
      <Header />
      <Body />
      <PopUp />
    </div>
  );
}

export default BackContainer;
