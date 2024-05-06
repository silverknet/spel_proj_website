import { useState } from 'react'
import React from 'react';
import good_ground from './assets/good_ground.png'

const Project = React.forwardRef((props, ref) => {
  return (
    <div className="Project" ref={ref}>
        <div className='ProjectPageContent'>
            <div className='TextSection'>
                <h2>Section 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisl vel est finibus, placerat bibendum neque viverra. Praesent facilisis ut lectus a feugiat. Aliquam quis tortor suscipit, porttitor nunc sit amet, rutrum est. Aenean nec efficitur tortor, vitae ultricies nibh. Aliquam augue erat, vulputate at eros a, lobortis venenatis augue. Pellentesque cursus mattis neque, finibus luctus neque. Pellentesque faucibus nec dolor eget congue. <br/> <br/>Ut laoreet odio eget ipsum hendrerit, sit amet consectetur massa bibendum. Aliquam interdum nisl quis nulla hendrerit varius. Curabitur pharetra arcu et nisi ultricies commodo. Mauris et mi ut quam tincidunt iaculis vitae at dui. Aenean elementum volutpat varius. Ut ut maximus diam. Morbi ut interdum arcu. Donec sapien enim, sodales ut orci id, convallis accumsan neque. Fusce faucibus elit vitae auctor efficitur.</p>
            </div>
            <div className='TextSection'>
                <h2>Section 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius nisl vel est finibus, placerat bibendum neque viverra. Praesent facilisis ut lectus a feugiat. Aliquam quis tortor suscipit,<br/> <br/>porttitor nunc sit amet, rutrum est. Aenean nec efficitur tortor, vitae ultricies nibh. Aliquam augue erat, vulputate at eros a, lobortis venenatis augue. Pellentesque cursus mattis neque, finibus luctus neque. Pellentesque faucibus nec dolor eget congue. Ut laoreet odio eget ipsum hendrerit, sit amet consectetur massa bibendum. Aliquam interdum nisl quis nulla hendrerit varius. Curabitur pharetra arcu et nisi ultricies commodo. Mauris et mi ut quam tincidunt iaculis vitae at dui. Aenean elementum volutpat varius. Ut ut maximus diam. Morbi ut interdum arcu. Donec sapien enim, sodales ut orci id, convallis accumsan neque. Fusce faucibus elit vitae auctor efficitur.</p>
            </div>
        </div>
        <div className='ImageContainer'>
            <img src={good_ground} alt="Ground" className="Good_ground" />
        </div>
    </div>
  )
});

export default Project
