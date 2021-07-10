import React from 'react';
import './FaceRecog.css';
import 'tachyons';
function FaceRecog=( { imageurl, boxes } )=> {
    return (
        <div className='mw6 center '>
            <div className='  absolute mt2' >
                <img id="inputimage" className='mt2'   src={imageurl} alt='' width='500px' height='auto' />
                {
                    boxes.map((box,i)=>{   
                        return(<div key={i} className="bounding-box" style={{top:box.topRow, right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>);
                    })
                }
            </div>
       </div>
    )
}
export default FaceRecog;  