import React from 'react';
import Logo from '../Logo/Logo';


const Navigation = ({ onRouteChange, isSignedIn }) =>{

      if (isSignedIn){
        return(
    <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight:'25px'}}>
      <p onClick={() => onRouteChange('signout')} className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green pointer white">Sign Out</p>
    </nav>
        );
  }else{
    return(
      <div>
        <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight:'25px'}}>

          <p onClick={() => onRouteChange('signin')} className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green pointer white">Sign In</p>

          <p onClick={() => onRouteChange('register')} className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib dark-green pointer white">Register</p>
        </nav>
        <div style={{marginTop:'-50px', marginLeft:'-20px'}}>
          <Logo />
        </div>


      </div>
      );
    }

}

export default Navigation;
