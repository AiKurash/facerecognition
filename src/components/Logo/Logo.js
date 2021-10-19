import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt" options={{ max : 40 }} style={{ height: 250, width: 250 }}>
        <div className="Tilt-inner pa3"> :) </div>
        <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
      </Tilt>
    </div>
  );
}

export default Logo;
