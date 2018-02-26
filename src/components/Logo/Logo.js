import React from 'react';
import Tilt from 'react-tilt'
import svg from './svg2.svg';




const Logo = () =>{
  return(
<div className="ma4 mt0">
  <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 125, width: 125 }} >
    <div className=" animated bounceIn">
<img src={svg} className="App-logo" alt='circle' />
</div>
</Tilt>
</div>
  );
}

export default Logo;
