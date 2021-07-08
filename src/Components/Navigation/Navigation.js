import React from 'react';
import  'tachyons';
function Navigation({onRouteChange, isSignedin}) {
    
      if (isSignedin){
        return (
        <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
          <p onClick={()=>onRouteChange('signin')} className='link f4 b  black hover-orange pa2' >Sign out</p>
        </nav>
        );
        } else{
          return (
            <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
              <p onClick={()=>onRouteChange('signin')} className='link f4 b  black hover-orange pa2 ' >Sign in</p>
              
              <p onClick={()=>onRouteChange('register')} className='link f4 b  black hover-orange pa2' >Register</p>
            </nav>
            );

        }
      
    
}
export default Navigation;  