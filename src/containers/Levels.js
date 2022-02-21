import React from 'react';
import Image from '../elements/Image';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';
function Levels() {
  return (
    <div className='levels'>
      <Image
        nameImg={backDifficultImg}
        widthImg={'100%'}
        className='backlevels'
      />
      <div className='listlevels'>
        <p>Choose difficulty:</p>
        <div className='easylevel selected'>
          <div>Easy</div>
          <div>3 min</div>
        </div>
        <div className='mediumlevel'>
          <div>Medium </div>
          <div>1 min</div>
        </div>
        <div className='hardlevel'>
          <div>Hard</div>
          <div>30 sec</div>
        </div>
      </div>
    </div>
  );
}

export default Levels;
