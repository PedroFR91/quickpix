import React from 'react';
import Image from '../elements/Image';
import backDifficultImg from '../assets/difficulty_dark_base_full.png';
import CountDown from '../elements/CountDown';

function setLevelEasy() {
  const setleveleasy = document.getElementById('setleveleasy').innerHTML;
  document.getElementById('leveleasy').innerHTML = setleveleasy;

  const levels = document.getElementById('levels');
  levels.classList.add('hide');

  const leveleasy = document.getElementById('leveleasy');
  leveleasy.classList.remove('hide');
  const countdowneasy = document.getElementById('countdowneasy');
  countdowneasy.classList.remove('hide');
}

function setLevelMedium() {
  const setlevelmedium = document.getElementById('setlevelmedium').innerHTML;
  document.getElementById('levelmedium').innerHTML = setlevelmedium;

  const levels = document.getElementById('levels');
  levels.classList.add('hide');

  const levelmedium = document.getElementById('levelmedium');
  levelmedium.classList.remove('hide');
  const countdownmedium = document.getElementById('countdownmedium');
  countdownmedium.classList.remove('hide');
}

function setLevelHard() {
  const setlevelhard = document.getElementById('setlevelhard').innerHTML;
  document.getElementById('levelhard').innerHTML = setlevelhard;

  const levels = document.getElementById('levels');
  levels.classList.add('hide');

  const levelhard = document.getElementById('levelhard');
  levelhard.classList.remove('hide');
  const countdownhard = document.getElementById('countdownhard');
  countdownhard.classList.remove('hide');
}
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
        <div className='easylevel selected' onClick={setLevelEasy}>
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
