import React from 'react';
import data from '../constants/data';

function PaletteGrid({ content, color, paletteColor }) {
  function pickColor(e) {
    e.preventDefault();
    paletteColor = color;
    console.log(color);
  }
  return (
    <div
      className='palettegrid'
      style={{ background: color }}
      onClick={pickColor}
    ></div>
  );
}

export default PaletteGrid;
