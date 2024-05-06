import { useState } from 'react'
import React from 'react';



const Game = React.forwardRef((props, ref) => {
  return (
    <div className="Game" ref={ref}>
        <iframe src="./putgamehere/index.html" style={{ width: '956px', height: '557px' }}></iframe>
    </div>
  )
});

export default Game
