import { useState } from 'react'
import React from 'react';

/*        <iframe src="./putgamehere/index.html" style={{ width: '956px', height: '557px' }}></iframe>*/

const Game = React.forwardRef((props, ref) => {
  return (
    <div className="Game" ref={ref}>
        <iframe 
            src="https://www.youtube.com/embed/GeDwJKJAz70" 
            style={{ width: '956px', height: '557px' }} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
        ></iframe>
    </div>
    
  )
});

export default Game
