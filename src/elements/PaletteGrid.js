import React from 'react';

function PaletteGrid({ content, color }) {
  return <div className='palettegrid' style={{ background: color }}></div>;
}

export default PaletteGrid;
