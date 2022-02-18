import React from 'react';
import Image from '../elements/Image';
import quickpixTitle from '../assets/quickpix_title.png';
import helpImg from '../assets/button_how_to_play.png';

function Header({ nameImg, altImgAlt }) {
  return (
    <div className='backgroundheader'>
      <div className='quickpixtitle'>
        <Image nameImg={quickpixTitle} widthImg={'100%'} />
      </div>
      <div className='themecontainer'>
        <div>
          <p className='todaystheme'>Today´s theme:</p>
        </div>
        <div>
          <p className='theme'>HUMAN</p>
        </div>
      </div>
      <div className='help'>
        <Image nameImg={helpImg} widthImg={'70%'} />
      </div>
    </div>
  );
}

export default Header;
