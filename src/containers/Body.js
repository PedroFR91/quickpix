import React from 'react';
import data from '../constants/data';
import MiniGrid from '../elements/MiniGrid';
import PaletteGrid from '../elements/PaletteGrid';
import buttonImg from '../assets/button_done.png';
import Image from '../elements/Image';
import Levels from '../containers/Levels';
import CountDown from '../elements/CountDown';

function Body() {
  return (
    <div className='bodycontainer'>
      <div className='centercontainer'>
        <div className='heading'>
          <div id='leveleasy' className='hide'>
            <p id='leveleasy'></p>
          </div>
          <div id='countdowneasy' className='hide'>
            <CountDown start={180} />
          </div>
          <div id='levelmedium' className='hide'>
            <p id='levelmedium'></p>
          </div>
          <div id='countdownmedium' className='hide'>
            <CountDown start={60} />
          </div>
          <div id='levelhard' className='hide'>
            <p id='levelhard'></p>
          </div>
          <div id='countdownhard' className='hide'>
            <CountDown start={30} />
          </div>
        </div>
        <div className='gridcontainer'>
          <div className='grid'>
            {data.grid.map((actualGrid, index) => (
              <MiniGrid key={index} color={actualGrid.color} />
            ))}
            <Levels />
          </div>
        </div>
        <div className='palette'>
          {data.palette.map((colorpalette, index) => (
            <PaletteGrid key={index} color={colorpalette.color} />
          ))}
        </div>
        <div className='button'>
          <Image nameImg={buttonImg} widthImg={'100%'} />
        </div>
      </div>
    </div>
  );
}

export default Body;
