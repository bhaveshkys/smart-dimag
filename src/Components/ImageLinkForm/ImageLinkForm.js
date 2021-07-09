import React from 'react';
import  'tachyons';
function ImageLinkForm({onInputChange,onButtonClick}) {
    return (
        <div className=' tc'>    
            <h3>This smart brain will detect faces in any picture.Give it a try</h3>
            <div className='ml6-ns mr6-ns shadow-3 pa3 tc pattern ' >
                <input type={Text} className="w-70-ns " onChange={onInputChange}></input>
                <button onClick={onButtonClick} className=" w-30-m grow f4-ns f6 ph3 pv2 dib white bg-light-purple ">detect</button>
            </div>        
        </div>
    );
}
export default ImageLinkForm;  