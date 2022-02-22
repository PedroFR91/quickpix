import React from 'react';

function PaletteGrid({ color, nameImg }) {
  function pickColor(e) {
    e.preventDefault();
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
