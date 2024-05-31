import { useState } from 'react'
import React from 'react';
import good_ground from './assets/good_ground.png'

const Project = React.forwardRef((props, ref) => {
  return (
    <div className="Project" ref={ref}>
        <div className='ProjectPageContent'>
            <div className='TextSection'>
                <h2>Story</h2>
                <p>Once there was a world where all animals and humans coexisted happily. One day, darkness appeared, took control, and possessed animals of different habitats. The world became separated into a good and bad world where the bad world was possessed with evil animals that aimed to take over the good world and destroy the humans that entered their path in the bad world. There is only one person that can enter both worlds and cause peace between the two worlds and that is the main character, Mis. Are you ready to take on this challenge, play as Mis and help create a world of peace? In order to create peace, obstacles in the good and bad world must be overcome. A sense of urgency and quick thinking is necessary in order to solve the puzzles, kill the animals in the bad world and save them to be happy in the good world.</p>
            </div>
            <div className='TextSection'>
                <h2>Game Background</h2>
                <p>The Upside Down is a 2D single-player platformer game where the player explores two parallel worlds with contrasting environments. In this first game we see the setting in a rainforest, but stay tuned for the next few games with new environments in the desert and the arctic! The player is able to jump, move right, move left, shoot with bullets, collect hearts, and switch between worlds seamlessly to beat obstacles and help heal the possessed animals.</p>
            </div>
        </div>
        <div className='ImageContainer'>
            <img src={good_ground} alt="Ground" className="Good_ground" />
        </div>
    </div>
  )
});

export default Project
