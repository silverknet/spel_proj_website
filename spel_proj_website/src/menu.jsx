import { useState } from 'react'
import GameLogo from './assets/Logo.png'
import React from 'react';



const Menu = React.forwardRef((props, ref) => {
    return (
        <div className='MenuContainer' ref={ref}>
            <div className="MenuBar">
                <img src={GameLogo} alt="Game Logo" className="GameLogo" />
                <div className='MenuComponent' onClick={() => props.setView(1)}><p className='MenuText'>Project</p></div>
                <div className='MenuComponent' onClick={() => props.setView(2)}><p className='MenuText'>About</p></div>
                <div className='MenuComponent' onClick={() => props.setView(3)}><p className='MenuText'>Game</p></div>
            </div>
        </div>
    )
});

export default Menu
