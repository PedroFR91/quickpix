import React from 'react';
import data from '../constants/data';
import MiniGrid from '../elements/MiniGrid';
import PaletteGrid from '../elements/PaletteGrid';
import buttonImg from '../assets/button_done.png';
import Image from '../elements/Image';
function Body() {
  return (
    <div className='bodycontainer'>
      <div className='centercontainer'>
        <div className='heading'>
          <div className='level'>Easy</div>
          <div className='time'>0'00''</div>
        </div>
        <div className='gridcontainer'>
          <div className='grid'>
            {data.grid.map((actualGrid, index) => (
              <MiniGrid color={actualGrid.minigrid} />
            ))}
          </div>
        </div>
        <div className='palette'>
          {data.palette.map((colorpalette, index) => (
            <PaletteGrid color={colorpalette.color} />
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
