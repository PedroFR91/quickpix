import React from 'react';
import data from '../constants/data';
import MiniGrid from '../elements/MiniGrid';
import PaletteGrid from '../elements/PaletteGrid';
import buttonImg from '../assets/button_done.png';
import Image from '../elements/Image';
import Levels from '../containers/Levels';
function Body() {
  return (
    <div className='bodycontainer'>
      <div className='centercontainer'>
        <div className='heading'>
          <div>
            <p id='level'></p>
          </div>
          <div>
            <p id='time'></p>
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
