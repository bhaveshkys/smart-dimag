import React from 'react';
import './FaceRecog.css';
import 'tachyons';
const FaceRecog=( { imageurl, boxes } )=> {
    const faces = boxes.map((box,i)=>{  return(<div key={i} className="bounding-box" style={{top:box.topRow, right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>)})
    return (
        <div className='mw6 center '>
            <div className='  absolute mt2' >
                <img id="inputimage" className='mt2'   src={imageurl} alt='' width='500px' height='auto' />
                
                    {faces}
            </div>
       </div>
    )
}
export default FaceRecog;  