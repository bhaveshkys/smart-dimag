import React from 'react';
import  'tachyons';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35,perspective: 100,reverse:false }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner v-mid "> <img className="pa2" src={brain} alt="logo"></img> </div>
            </Tilt>
       </div>
    );
}
export default Logo;  