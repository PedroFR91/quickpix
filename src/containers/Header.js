import React from 'react';
import Image from '../elements/Image';
import headerBackground from '../assets/header_blue.png';
import quickpixTitle from '../assets/quickpix_title.png';
import helpImg from '../assets/button_how_to_play.png';
import Title from '../elements/Title';

function Header({ nameImg, altImgAlt }) {
  return (
    <div>
      <div className='backgroundheader'>
        <Image
          nameImg={headerBackground}
          altImg='headerBlue'
          widthImg={'100%'}
        />
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
    </div>
  );
}

export default Header;
