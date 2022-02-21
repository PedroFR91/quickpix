import React from 'react';
import Image from '../elements/Image';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';

function setLevelEasy() {
  const setleveleasy = document.getElementById('setleveleasy').innerHTML;
  document.getElementById('level').innerHTML = setleveleasy;
  const settimeeasy = document.getElementById('settimeeasy').innerHTML;
  document.getElementById('time').innerHTML = settimeeasy;
}

function setLevelMedium() {
  const setlevelmedium = document.getElementById('setlevelmedium').innerHTML;
  document.getElementById('level').innerHTML = setlevelmedium;
  const settimemedium = document.getElementById('settimemedium').innerHTML;
  document.getElementById('time').innerHTML = settimemedium;
}

function setLevelHard() {
  const setlevelhard = document.getElementById('setlevelhard').innerHTML;
  document.getElementById('level').innerHTML = setlevelhard;
  const settimehard = document.getElementById('settimehard').innerHTML;
  document.getElementById('time').innerHTML = settimehard;
}
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
        <div className='easylevel selected' onClick={setLevelEasy}>
          <div id='setleveleasy'>Easy</div>
          <div id='settimeeasy'>3 min</div>
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
