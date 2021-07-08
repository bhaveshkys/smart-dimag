import React from 'react';
import  'tachyons';
function ImageLinkForm({onInputChange,onButtonClick}) {
    return (
        <div className=' tc'>    
            <h3>This smart brain will detect faces in any picture.Give it a try</h3>
            <div className='ml6 mr6 shadow-3 pa3 tc pattern ' >
                <input type={Text} className="w-70" onChange={onInputChange}></input>
                <button onClick={onButtonClick} className=" w-30 grow f4 ph3 pv2 dib white bg-light-purple ">detect</button>
            </div>        
        </div>
    );
}
export default ImageLinkForm;  