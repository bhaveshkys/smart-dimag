import React from 'react';
import  'tachyons';
function Navigation({onRouteChange, isSignedin}) {
    
      if (isSignedin){
        return (
        <nav style={{display: 'flex',justifyContent: 'flex-end'}}>
          <p onClick={()=>onRouteChange('signin')} className=' link f4 b  white-80 hover-orange pa2 pointer' >Sign out</p>
        </nav>
        );
        } else{
          return (
            <nav style={{display: 'flex',justifyContent: ' center'}}>
              <p onClick={()=>onRouteChange('signin')} className='link f4 b  white-80 hover-orange pa2 pointer ' >Sign in</p>
              
              <p onClick={()=>onRouteChange('register')} className='link f4 b  white-80 hover-orange pa2 pointer' >Register</p>
            </nav>
            );

        }
      
    
}
export default Navigation;  