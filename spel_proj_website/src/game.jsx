import { useState } from 'react'
import React from 'react';



const Game = React.forwardRef((props, ref) => {
  return (
    <div className="Game" ref={ref}>
        Game
    </div>
  )
});

export default Game
