import React, { useState } from 'react';

function MiniGrid({ color, paletteColor }) {
  const [background, setBackground] = useState('#ffffff');

  const setColor = (background) => {
    setBackground(background);
  };

  return (
    <div
      className='minigrid'
      onClick={() => setColor('#000')}
      style={{ backgroundColor: background }}
    ></div>
  );
}

export default MiniGrid;
