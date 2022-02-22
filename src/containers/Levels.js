import React from 'react';
import Image from '../elements/Image';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';
import {
  setLevelEasy,
  setLevelMedium,
  setLevelHard,
  startCd,
} from '../elements/functions';
function Levels() {
  return (
    <div className='levels' id='levels'>
      <Image
        nameImg={backDifficultImg}
        widthImg={'100%'}
        className='backlevels'
      />
      <div className='listlevels'>
        <p>Choose difficulty:</p>
        <div
          className='easylevel selected'
          onClick={(e) => {
            setLevelEasy();
            startCd();
          }}
        >
          <div id='setleveleasy'>Easy</div>
          <div>
            <span id='settimeeasy'>3</span> min
          </div>
        </div>
        <div className='mediumlevel' onClick={setLevelMedium}>
          <div id='setlevelmedium'>Medium </div>
          <div id='settimemedium'>1 min</div>
        </div>
        <div className='hardlevel' onClick={setLevelHard}>
          <div id='setlevelhard'>Hard</div>
          <div id='settimehard'>30 sec</div>
        </div>
      </div>
    </div>
  );
}

export default Levels;
