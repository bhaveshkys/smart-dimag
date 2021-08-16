import React from 'react';
import  'tachyons';
import Tilt from 'react-tilt';
function ImageLinkForm({onInputChange,onButtonClick}) {
    return (
        <div className='near-white tc'>    
            
            <Tilt options={{ max : 10 }} className='ml6-ns mr6-ns pa3 tc  ' >
                <input type={Text} className="w-70-ns h-50 " onChange={onInputChange}></input>
                <button onClick={onButtonClick} className=" h-50 w-30-m grow f4-ns f6 ph3 pv2 dib white bg-blue hover-bg-red ">detect</button>
            </Tilt>        
        </div>
    );
}
export default ImageLinkForm;  