import { useState } from 'react'
import React from 'react';
import bad_ground from './assets/bad_ground.png'

const About = React.forwardRef((props, ref) => {
  return (
    <div className="About" ref={ref}>
      <div className='AboutPageContent'>
            <div className='TextSection'>
                <h2>Features</h2>
                <p> - Dual-World Exploration: Seamlessly transitions between the good and the bad dimensions.
                <p> - Resource Management: The player has to collect bullets and other resources in the good world to arm itself against the dangers of the upside down world.</p>
                <p> - Shooting Mechanics: As the player progresses through the upside down world, they engage in encounters with enemies and need to use the collected bullets to fight them off.</p>
                <p> - Environmental Puzzles: The player needs to solve environmental puzzles and overcome obstacles to progress through the game.</p>
                <p> - Evolving Narrative: Uncover the mysteries of the parallel worlds through a storyline filled with twists, turns, and unexpected revelations.</p>
                </p>
                 
            </div>
            <div className='TextSection'>
                <h2>About the Team</h2>
                <p> The team is an elite group of 4 individuals studying at KTH Royal Institute of Technoloy in Sweden. This group combined their skills and strenghts to create a masterpiece you must play.  </p>
                <img className='ImageSection' src="pic_palak.jpg" alt=""></img>
                <img className='ImageSection' src="martin.jpg" alt=""></img>
            </div>
        </div>
        <div className='ImageContainer'>
            <img src={bad_ground} alt="Ground" className="bad_ground" />
        </div>
    </div>
  )
});

export default About
